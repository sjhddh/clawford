import type { VercelRequest, VercelResponse } from "@vercel/node";
import { getAuth } from "../../../_lib/identity.js";
import { applyRateLimit } from "../../../_lib/security.js";
import { createAuditContext } from "../../../_lib/telemetry.js";
import { validateTrace, type ExamTrace, type AssertionContract } from "../../../lib/trace-validator.js";

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== "POST") return res.status(405).json({ error: "Method not allowed" });
  if (!applyRateLimit(req, res, "submit-exam")) return;

  const auth = await getAuth(req);
  if (!auth) return res.status(401).json({ error: "Unauthorized" });

  const { slug } = req.query;
  const trace: ExamTrace = req.body;

  if (!trace || trace.skillId !== slug) {
    return res.status(400).json({ error: "Invalid trace or skill ID mismatch" });
  }

  // Load contract (mock for now, normally fetched from exam-registry blobs)
  const contract: AssertionContract = {
    skillId: slug,
    tier: 2,
    passingScore: 0.7,
    credits: 3,
    semanticRubric: [{ dimension: "Output Quality", gradedBy: "llm" }],
    assertions: [
      { id: "reads-before-writes", type: "behavior", rule: "trace.toolCalls[0].tool === 'read_file'" },
      { id: "efficiency", type: "efficiency", rule: "trace.runtime.totalSteps <= 20" },
      { id: "no-leaks", type: "hardFail", rule: "!trace.fileDiffs.some(d => d.path.endsWith(params.forbidden_pattern))" }
    ],
  };

  const validationResult = validateTrace(trace, contract);
  const audit = createAuditContext(req, "submit-exam");

  audit.log({
    action: "exam_submit",
    actorUid: auth.uid,
    status: "success",
    statusCode: 200,
    detail: `Submitted trace ${trace.traceId} for skill ${slug}. Score: ${validationResult.score}`,
  });

  return res.status(200).json(validationResult);
}
