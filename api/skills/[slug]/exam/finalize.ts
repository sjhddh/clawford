import type { VercelRequest, VercelResponse } from "@vercel/node";
import { authenticateRequest as getAuth } from "../../../_lib/session.js";
import { applyRateLimit } from "../../../_lib/security.js";
import { createAuditContext } from "../../../_lib/telemetry.js";
import { getTranscript, updateTranscript } from "../../../_lib/blob.js";

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== "POST") return res.status(405).json({ error: "Method not allowed" });
  if (!applyRateLimit(req, res, "finalize-exam")) return;

  const auth = await getAuth(req);
  if (!auth) return res.status(401).json({ error: "Unauthorized" });

  const { slug } = req.query;
  const { traceId, gradeResult } = req.body;

  if (!slug || typeof slug !== "string") {
    return res.status(400).json({ error: "Missing slug" });
  }

  if (!traceId || !gradeResult) {
    return res.status(400).json({ error: "Missing trace ID or grade result" });
  }

  const transcript = await getTranscript(auth.uid);
  if (!transcript) {
    return res.status(404).json({ error: "Transcript not found" });
  }

  const creditsEarned = gradeResult.decision === "pass" ? 3 : 0; // Simplified
  
  await updateTranscript(auth.uid, (transcript) => {
    if (!transcript.skillExamResults) transcript.skillExamResults = [];
    transcript.skillExamResults.push({
      skillId: slug,
      skillVersion: "1.0",
      skillHash: "latest",
      credentialStatus: "active",
      tier: 2,
      score: gradeResult.score,
      maxScore: gradeResult.maxScore,
      decision: gradeResult.decision,
      assertionResults: gradeResult.assertionResults || [],
      traceHash: traceId,
      credits: creditsEarned,
      timestamp: new Date().toISOString()
    });
    transcript.totalSkillCredits = (transcript.totalSkillCredits || 0) + creditsEarned;
    return transcript;
  });

  const audit = createAuditContext(req, "finalize-exam");
  audit.log({
    action: "exam_finalize",
    actorUid: auth.uid,
    status: "success",
    statusCode: 200,
    detail: `Finalized trace ${traceId} for skill ${slug}. Decision: ${gradeResult.decision}`,
  });

  return res.status(200).json({
    status: "finalized",
    traceId,
    skillId: slug,
    decision: gradeResult.decision,
    creditsEarned,
  });
}
