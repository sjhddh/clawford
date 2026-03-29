import type { VercelRequest, VercelResponse } from "@vercel/node";
import fs from "fs";
import path from "path";
import { authenticateRequest as getAuth } from "../../../_lib/session.js";
import { getTranscript } from "../../../_lib/blob.js";
import { applyRateLimit } from "../../../_lib/security.js";
import { createAuditContext } from "../../../_lib/telemetry.js";
import {
  getSkillExamAttempt,
  saveSkillExamAttempt,
  saveSkillVerification,
} from "../../../_lib/blob.js";
import {
  verifyAttestation,
  type ExamAttestation,
  type AttestationValidationResult,
} from "../../../lib/attestation-validator.js";

const SKILL_SLUG_PATTERN = /^[a-z0-9][a-z0-9-]*$/;

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== "POST") return res.status(405).json({ error: "Method not allowed" });
  if (!applyRateLimit(req, res, "submit-exam")) return;

  const auth = await getAuth(req);
  if (!auth) return res.status(401).json({ error: "Unauthorized" });

  const transcript = await getTranscript(auth.uid);
  if (!transcript || transcript.currentState === "applicant" || transcript.currentState === "freshman") {
    return res.status(403).json({ 
      error: "Foundations Prerequisite Required", 
      message: "Agents must graduate from the Clawford Foundations curriculum before submitting ClawHub skill exams." 
    });
  }

  const { slug } = req.query;
  const body = req.body;

  if (!slug || typeof slug !== "string") {
    return res.status(400).json({ error: "Invalid slug" });
  }
  if (!SKILL_SLUG_PATTERN.test(slug)) {
    return res.status(400).json({ error: "Invalid skill slug format" });
  }

  if (!body || typeof body !== "object") {
    return res.status(400).json({ error: "Missing request body" });
  }

  const requiredFields = ["attestationId", "skillId", "score", "passed", "hardFailTriggered", "sandboxSignature", "sandboxId"] as const;
  const sessionBoundFields = ["examAttemptId", "challengeNonce", "contractHash", "skillVersion", "skillHash"] as const;
  for (const field of requiredFields) {
    if (body[field] === undefined || body[field] === null) {
      return res.status(400).json({ error: `Missing required field: ${field}` });
    }
  }
  for (const field of sessionBoundFields) {
    if (typeof body[field] !== "string" || body[field].length === 0) {
      return res.status(400).json({ error: `Missing required field: ${field}` });
    }
  }

  if (typeof body.score !== "number" || body.score < 0 || body.score > 100) {
    return res.status(400).json({ error: "Score must be a number between 0 and 100" });
  }
  if (typeof body.passed !== "boolean" || typeof body.hardFailTriggered !== "boolean") {
    return res.status(400).json({ error: "passed and hardFailTriggered must be booleans" });
  }
  if (typeof body.sandboxSignature !== "string" || typeof body.sandboxId !== "string") {
    return res.status(400).json({ error: "sandboxSignature and sandboxId must be strings" });
  }
  if (typeof body.attestationId !== "string" || body.attestationId.length === 0) {
    return res.status(400).json({ error: "attestationId must be a non-empty string" });
  }
  const assertionResults = Array.isArray(body.assertionResults)
    ? body.assertionResults.filter(
      (item: unknown): item is { id: string; passed: boolean } => {
        if (!item || typeof item !== "object") return false;
        const candidate = item as { id?: unknown; passed?: unknown };
        return typeof candidate.id === "string" && typeof candidate.passed === "boolean";
      },
    )
    : [];

  const examAttempt = await getSkillExamAttempt(auth.uid, body.examAttemptId);
  if (!examAttempt) {
    return res.status(404).json({ error: "Exam attempt not found. Call start first." });
  }
  if (examAttempt.status !== "started") {
    return res.status(409).json({ error: "Exam attempt has already been submitted or finalized." });
  }
  if (new Date(examAttempt.expiresAt).getTime() < Date.now()) {
    return res.status(410).json({ error: "Exam attempt expired. Start a new attempt." });
  }
  if (examAttempt.skillId !== slug) {
    return res.status(400).json({ error: "Exam attempt skill does not match the URL slug" });
  }
  if (
    body.challengeNonce !== examAttempt.challengeNonce
    || body.contractHash !== examAttempt.contractHash
    || body.skillVersion !== examAttempt.skillVersion
    || body.skillHash !== examAttempt.skillHash
  ) {
    return res.status(400).json({ error: "Attestation binding fields do not match the issued exam attempt" });
  }

  const attestation: ExamAttestation = {
    examAttemptId: body.examAttemptId,
    attestationId: body.attestationId,
    skillId: body.skillId,
    challengeNonce: body.challengeNonce,
    contractHash: body.contractHash,
    skillVersion: body.skillVersion,
    skillHash: body.skillHash,
    score: body.score,
    passed: body.passed,
    hardFailTriggered: body.hardFailTriggered,
    hardFailReasons: Array.isArray(body.hardFailReasons)
      ? body.hardFailReasons.filter((value: unknown): value is string => typeof value === "string")
      : [],
    assertionResults,
    sandboxSignature: body.sandboxSignature,
    sandboxId: body.sandboxId,
  };

  if (attestation.skillId !== slug) {
    return res.status(400).json({ error: "Attestation skillId does not match the URL slug" });
  }

  let validationResult: AttestationValidationResult;
  try {
    validationResult = verifyAttestation(attestation, {
      requireBindingFields: true,
      passingScore: examAttempt.passingScore ?? 70,
    });
  } catch (error: unknown) {
    const message = error instanceof Error ? error.message : "Attestation verification failed";
    return res.status(403).json({ error: message });
  }

  // Persist the server-verified grade so finalize can trust it
  await saveSkillVerification(auth.uid, {
    examAttemptId: body.examAttemptId,
    attestationId: attestation.attestationId,
    uid: auth.uid,
    skillId: slug,
    challengeNonce: body.challengeNonce,
    contractHash: body.contractHash,
    skillVersion: body.skillVersion,
    skillHash: body.skillHash,
    tier: examAttempt.tier,
    credits: examAttempt.credits,
    score: validationResult.score,
    maxScore: validationResult.maxScore,
    decision: validationResult.decision,
    assertionResults: assertionResults.filter(
      (item: { id: string; passed: boolean }) => examAttempt.assertionIds.includes(item.id),
    ),
    hardFail: validationResult.hardFail,
    createdAt: new Date().toISOString(),
  });
  await saveSkillExamAttempt(auth.uid, {
    ...examAttempt,
    status: "submitted",
    submittedAt: new Date().toISOString(),
    attestationId: attestation.attestationId,
  });

  // Golden Trace Injection for Few-Shot Learning on failure
  if (validationResult.decision === "fail") {
    try {
      const examRegistryRoot = path.resolve(process.cwd(), "exam-registry");
      const skillDir = path.resolve(examRegistryRoot, slug);
      if (skillDir !== path.join(examRegistryRoot, slug)) {
        throw new Error("Invalid skill slug");
      }
      const goldenTracePath = path.resolve(skillDir, "golden-trace.json");
      if (fs.existsSync(goldenTracePath)) {
        validationResult.goldenTraceHint = JSON.parse(fs.readFileSync(goldenTracePath, "utf-8"));
      }
    } catch {
      // Corrupt golden-trace.json should not crash the failure response
    }
  }

  const audit = createAuditContext(req, "submit-exam");
  audit.log({
    action: "exam_submit",
    actorUid: auth.uid,
    status: "success",
    statusCode: 200,
    detail: `Verified TEE attestation ${attestation.attestationId} for skill ${slug}. Score: ${validationResult.score}`,
  });

  return res.status(200).json(validationResult);
}
