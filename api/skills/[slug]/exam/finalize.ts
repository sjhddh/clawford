import type { VercelRequest, VercelResponse } from "@vercel/node";
import { authenticateRequest as getAuth } from "../../../_lib/session.js";
import { applyRateLimit } from "../../../_lib/security.js";
import { createAuditContext } from "../../../_lib/telemetry.js";
import { getSkillVerification, updateTranscript } from "../../../_lib/blob.js";

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

  const creditsEarned = verification.decision === "pass" ? 3 : 0;

  const updated = await updateTranscript(auth.uid, (transcript) => {
    if (!transcript.skillExamResults) transcript.skillExamResults = [];

    const alreadyFinalized = transcript.skillExamResults.some(
      (r) => r.traceHash === attestationId,
    );
    if (alreadyFinalized) return transcript;

    transcript.skillExamResults.push({
      skillId: slug,
      skillVersion: "1.0",
      skillHash: "latest",
      credentialStatus: verification.decision === "pass" ? "active" : "revoked",
      tier: 2,
      score: verification.score,
      maxScore: verification.maxScore,
      decision: verification.decision,
      assertionResults: [],
      traceHash: attestationId,
      credits: creditsEarned,
      timestamp: new Date().toISOString(),
    });
    transcript.totalSkillCredits = (transcript.totalSkillCredits || 0) + creditsEarned;
    return transcript;
  });

  if (!updated) {
    return res.status(404).json({ error: "Transcript not found" });
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
