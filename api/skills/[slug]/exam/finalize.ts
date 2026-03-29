import type { VercelRequest, VercelResponse } from "@vercel/node";
import { getAuth } from "../../../_lib/identity.js";
import { applyRateLimit } from "../../../_lib/security.js";
import { createAuditContext } from "../../../_lib/telemetry.js";

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== "POST") return res.status(405).json({ error: "Method not allowed" });
  if (!applyRateLimit(req, res, "finalize-exam")) return;

  const auth = await getAuth(req);
  if (!auth) return res.status(401).json({ error: "Unauthorized" });

  const { slug } = req.query;
  const { traceId, gradeResult } = req.body;

  if (!traceId || !gradeResult) {
    return res.status(400).json({ error: "Missing trace ID or grade result" });
  }

  // Add logic to save to Transcript via blob.ts later
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
    creditsEarned: gradeResult.decision === "pass" ? 3 : 0,
  });
}
