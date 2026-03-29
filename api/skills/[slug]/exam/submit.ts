import type { VercelRequest, VercelResponse } from "@vercel/node";
import fs from "fs";
import path from "path";
import { authenticateRequest as getAuth } from "../../../_lib/session.js";
import { applyRateLimit } from "../../../_lib/security.js";
import { createAuditContext } from "../../../_lib/telemetry.js";
import { saveSkillVerification } from "../../../_lib/blob.js";
import {
  verifyAttestation,
  type ExamAttestation,
  type AttestationValidationResult,
} from "../../../lib/attestation-validator.js";

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== "POST") return res.status(405).json({ error: "Method not allowed" });
  if (!applyRateLimit(req, res, "submit-exam")) return;

  const auth = await getAuth(req);
  if (!auth) return res.status(401).json({ error: "Unauthorized" });

  const { slug } = req.query;
  const body = req.body;

  if (!slug || typeof slug !== "string") {
    return res.status(400).json({ error: "Invalid slug" });
  }

  if (!body || typeof body !== "object") {
    return res.status(400).json({ error: "Missing request body" });
  }

  const requiredFields = ["attestationId", "skillId", "score", "passed", "hardFailTriggered", "sandboxSignature", "sandboxId"] as const;
  for (const field of requiredFields) {
    if (body[field] === undefined || body[field] === null) {
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

  const attestation: ExamAttestation = {
    attestationId: body.attestationId,
    skillId: body.skillId,
    score: body.score,
    passed: body.passed,
    hardFailTriggered: body.hardFailTriggered,
    hardFailReasons: Array.isArray(body.hardFailReasons) ? body.hardFailReasons : [],
    sandboxSignature: body.sandboxSignature,
    sandboxId: body.sandboxId,
  };

  if (attestation.skillId !== slug) {
    return res.status(400).json({ error: "Attestation skillId does not match the URL slug" });
  }

  let validationResult: AttestationValidationResult;
  try {
    validationResult = verifyAttestation(attestation);
  } catch (error: unknown) {
    const message = error instanceof Error ? error.message : "Attestation verification failed";
    return res.status(403).json({ error: message });
  }

  // Persist the server-verified grade so finalize can trust it
  await saveSkillVerification(auth.uid, {
    attestationId: attestation.attestationId,
    uid: auth.uid,
    skillId: slug,
    score: validationResult.score,
    maxScore: validationResult.maxScore,
    decision: validationResult.decision,
    hardFail: validationResult.hardFail,
    createdAt: new Date().toISOString(),
  });

  // Golden Trace Injection for Few-Shot Learning on failure
  const goldenTracePath = path.join(process.cwd(), "exam-registry", slug, "golden-trace.json");
  if (validationResult.decision === "fail" && fs.existsSync(goldenTracePath)) {
    validationResult.goldenTraceHint = JSON.parse(fs.readFileSync(goldenTracePath, "utf-8"));
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
