import type { VercelRequest, VercelResponse } from "@vercel/node";
import { getAuth } from "../../_lib/identity.js";
import { applyRateLimit } from "../../_lib/security.js";
import { createAuditContext } from "../../_lib/telemetry.js";
import { validateTrace, type ExamTrace, type AssertionContract } from "../lib/trace-validator.js";

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== "POST") return res.status(405).json({ error: "Method not allowed" });
  if (!applyRateLimit(req, res, "audit-telemetry")) return;

  const auth = await getAuth(req);
  if (!auth) return res.status(401).json({ error: "Unauthorized" });

  const trace: ExamTrace = req.body;

  if (!trace || !trace.skillId) {
    return res.status(400).json({ error: "Invalid trace or missing skill ID" });
  }

  // Load contract (mock for now, normally fetched from exam-registry blobs)
  const contract: AssertionContract = {
    skillId: trace.skillId,
    tier: 2,
    passingScore: 0.7,
    credits: 3,
    semanticRubric: [{ dimension: "Output Quality", gradedBy: "llm" }],
    assertions: [
      { id: "no-leaks", type: "hardFail", rule: "!trace.fileDiffs.some(d => d.path.endsWith('.env'))" }
    ],
  };

  const validationResult = validateTrace(trace, contract);
  const audit = createAuditContext(req, "audit-telemetry");

  audit.log({
    action: "telemetry_audit",
    actorUid: auth.uid,
    status: validationResult.hardFail.triggered ? "failed" : "passed",
    statusCode: 200,
    detail: `Audited trace ${trace.traceId} for skill ${trace.skillId}. HardFail: ${validationResult.hardFail.triggered}`,
  });

  return res.status(200).json(validationResult);
}
