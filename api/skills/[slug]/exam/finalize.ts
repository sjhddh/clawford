import type { VercelRequest, VercelResponse } from "@vercel/node";
import { authenticateRequest as getAuth } from "../../../_lib/session.js";
import { applyRateLimit } from "../../../_lib/security.js";
import { createAuditContext } from "../../../_lib/telemetry.js";
import {
  calculateActiveSkillCredits,
  getSkillCredential,
  getSkillExamAttempt,
  getSkillVerification,
  listSkillCredentials,
  saveSkillCredential,
  saveSkillExamAttempt,
  updateTranscript,
} from "../../../_lib/blob.js";

const SKILL_SLUG_PATTERN = /^[a-z0-9][a-z0-9-]*$/;

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== "POST") return res.status(405).json({ error: "Method not allowed" });
  if (!applyRateLimit(req, res, "finalize-exam")) return;

  const auth = await getAuth(req);
  if (!auth) return res.status(401).json({ error: "Unauthorized" });

  const { slug } = req.query;
  const { attestationId } = req.body;

  if (!slug || typeof slug !== "string") {
    return res.status(400).json({ error: "Missing slug" });
  }
  if (!SKILL_SLUG_PATTERN.test(slug)) {
    return res.status(400).json({ error: "Invalid skill slug format" });
  }

  if (!attestationId || typeof attestationId !== "string") {
    return res.status(400).json({ error: "Missing attestation ID" });
  }

  // Look up the server-side verification record — never trust client-reported grades
  const verification = await getSkillVerification(auth.uid, attestationId);
  if (!verification) {
    return res.status(404).json({
      error: "No verified submission found for this attestation ID. Submit your exam first via the submit endpoint.",
    });
  }

  if (verification.skillId !== slug) {
    return res.status(400).json({ error: "Attestation skill ID does not match the requested slug" });
  }
  if (verification.decision !== "pass") {
    return res.status(409).json({
      error: "Only passed attestations can be finalized into an active credential.",
      decision: verification.decision,
    });
  }

  const creditsEarned = verification.credits;
  const attempt = await getSkillExamAttempt(auth.uid, verification.examAttemptId);
  const verificationClass = attempt?.verificationClass ?? "official-clawhub";
  const sourceMappings = attempt?.sourceMappings ?? [`clawhub:${slug}`];

  const existingCredential = await getSkillCredential(auth.uid, attestationId);
  const now = new Date().toISOString();
  const finalizedCredential = existingCredential ?? {
    skillId: slug,
    skillVersion: verification.skillVersion,
    skillHash: verification.skillHash,
    verificationClass,
    sourceMappings,
    credentialStatus: "active" as const,
    tier: verification.tier,
    score: verification.score,
    maxScore: verification.maxScore,
    decision: verification.decision,
    assertionResults: verification.assertionResults,
    attestationId,
    credits: creditsEarned,
    timestamp: now,
  };
  await saveSkillCredential(auth.uid, finalizedCredential);

  const credentials = await listSkillCredentials(auth.uid);
  const mergedCredentials = [...credentials];
  for (const credential of mergedCredentials) {
    if (
      credential.skillId === slug
      && credential.attestationId !== attestationId
      && credential.credentialStatus === "active"
      && credential.skillHash !== verification.skillHash
    ) {
      credential.credentialStatus = "legacy";
      await saveSkillCredential(auth.uid, credential);
    }
  }
  if (!credentials.some((row) => row.attestationId === attestationId)) {
    mergedCredentials.push(finalizedCredential);
  }

  const normalizedCredentials = mergedCredentials
    .sort((a, b) => a.timestamp.localeCompare(b.timestamp))
    .map((row) => ({ ...row }));

  const updated = await updateTranscript(auth.uid, (transcript) => {
    const byAttestation = new Map<string, (typeof normalizedCredentials)[number]>();
    for (const row of transcript.skillExamResults ?? []) {
      byAttestation.set(row.attestationId, row);
    }
    for (const row of normalizedCredentials) {
      byAttestation.set(row.attestationId, row);
    }
    const merged = Array.from(byAttestation.values()).sort((a, b) => a.timestamp.localeCompare(b.timestamp));
    transcript.skillExamResults = merged;
    transcript.totalSkillCredits = calculateActiveSkillCredits(merged);
    return transcript;
  });

  if (!updated) {
    return res.status(404).json({ error: "Transcript not found" });
  }

  if (attempt && attempt.status !== "finalized") {
    await saveSkillExamAttempt(auth.uid, {
      ...attempt,
      status: "finalized",
      finalizedAt: now,
      attestationId,
    });
  }

  const audit = createAuditContext(req, "finalize-exam");
  audit.log({
    action: "exam_finalize",
    actorUid: auth.uid,
    status: "success",
    statusCode: 200,
    detail: `Finalized TEE attestation ${attestationId} for skill ${slug}. Decision: ${verification.decision}`,
  });

  return res.status(200).json({
    status: "finalized",
    attestationId,
    skillId: slug,
    verificationClass: finalizedCredential.verificationClass ?? "official-clawhub",
    sourceMappings: finalizedCredential.sourceMappings ?? [`clawhub:${slug}`],
    decision: verification.decision,
    creditsEarned,
  });
}
