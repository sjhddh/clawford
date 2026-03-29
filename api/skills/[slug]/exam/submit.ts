import type { VercelRequest, VercelResponse } from "@vercel/node";
import fs from "fs";
import path from "path";
import { authenticateRequest as getAuth } from "../../../_lib/session.js";
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

  if (!slug || typeof slug !== "string") {
    return res.status(400).json({ error: "Invalid slug" });
  }

  const contractPath = path.join(process.cwd(), "exam-registry", slug, "assertion-contract.json");
  const goldenTracePath = path.join(process.cwd(), "exam-registry", slug, "golden-trace.json");

  let contract: AssertionContract;
  
  if (!fs.existsSync(contractPath)) {
    // Zero-Config Auto-Generated Fallback (Tier 2) for missing skills
    contract = {
      skillId: slug,
      tier: 2,
      passingScore: 0.5,
      credits: 1,
      semanticRubric: [{ dimension: "Output Quality", gradedBy: "llm" }],
      assertions: [
        { id: "efficiency-check", type: "efficiency", rule: "trace.runtime.totalSteps <= 30" },
        { id: "non-empty-run", type: "state", rule: "trace.toolCalls.length > 0 || trace.fileDiffs.length > 0" }
      ],
    };
  } else {
    contract = JSON.parse(fs.readFileSync(contractPath, "utf-8"));
  }

  const validationResult = validateTrace(trace, contract);
  
  // Golden Trace Injection for Few-Shot Learning on failure
  if (validationResult.decision === "fail" && fs.existsSync(goldenTracePath)) {
    validationResult.goldenTraceHint = JSON.parse(fs.readFileSync(goldenTracePath, "utf-8"));
  }

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
