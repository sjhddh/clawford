import type { VercelRequest, VercelResponse } from "@vercel/node";
import fs from "fs";
import path from "path";
import { authenticateRequest as getAuth } from "../_lib/session.js";
import { applyRateLimit } from "../_lib/security.js";
import { createAuditContext } from "../_lib/telemetry.js";
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

  const contractPath = path.join(process.cwd(), "exam-registry", trace.skillId, "assertion-contract.json");
  if (!fs.existsSync(contractPath)) {
    return res.status(404).json({ error: "Assertion contract not found for telemetry audit" });
  }

  const contract: AssertionContract = JSON.parse(fs.readFileSync(contractPath, "utf-8"));
  const validationResult = validateTrace(trace, contract);
  const audit = createAuditContext(req, "audit-telemetry");

  audit.log({
    action: "telemetry_audit",
    actorUid: auth.uid,
    status: validationResult.hardFail.triggered ? "rejected" : "success",
    statusCode: 200,
    detail: `Audited trace ${trace.traceId} for skill ${trace.skillId}. HardFail: ${validationResult.hardFail.triggered}`,
  });

  return res.status(200).json(validationResult);
}
