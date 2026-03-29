import type { VercelRequest, VercelResponse } from "@vercel/node";
import { authenticateRequest as getAuth } from "../../../_lib/session.js";
import { applyRateLimit } from "../../../_lib/security.js";
import { createAuditContext } from "../../../_lib/telemetry.js";
import {
  getSkillExamAttempt,
  getSkillVerification,
  saveSkillExamAttempt,
  updateTranscript,
} from "../../../_lib/blob.js";

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

  const updated = await updateTranscript(auth.uid, (transcript) => {
    if (!transcript.skillExamResults) transcript.skillExamResults = [];

    const alreadyFinalized = transcript.skillExamResults.some(
      (r) => r.traceHash === attestationId,
    );
    if (alreadyFinalized) return transcript;

    for (const existing of transcript.skillExamResults) {
      if (
        existing.skillId === slug
        && existing.credentialStatus === "active"
        && existing.skillHash !== verification.skillHash
      ) {
        existing.credentialStatus = "legacy";
      }
    }

    transcript.skillExamResults.push({
      skillId: slug,
      skillVersion: verification.skillVersion,
      skillHash: verification.skillHash,
      credentialStatus: "active",
      tier: verification.tier,
      score: verification.score,
      maxScore: verification.maxScore,
      decision: verification.decision,
      assertionResults: verification.assertionResults,
      traceHash: attestationId,
      credits: creditsEarned,
      timestamp: new Date().toISOString(),
    });
    transcript.totalSkillCredits = transcript.skillExamResults
      .filter((r) => r.credentialStatus === "active" && r.decision === "pass")
      .reduce((sum, r) => sum + r.credits, 0);
    return transcript;
  });

  if (!updated) {
    return res.status(404).json({ error: "Transcript not found" });
  }

  const attempt = await getSkillExamAttempt(auth.uid, verification.examAttemptId);
  if (attempt && attempt.status !== "finalized") {
    await saveSkillExamAttempt(auth.uid, {
      ...attempt,
      status: "finalized",
      finalizedAt: new Date().toISOString(),
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
    decision: verification.decision,
    creditsEarned,
  });
}
