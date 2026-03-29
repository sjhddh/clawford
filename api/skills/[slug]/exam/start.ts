import type { VercelRequest, VercelResponse } from "@vercel/node";
import fs from "fs";
import path from "path";
import { authenticateRequest as getAuth } from "../../../_lib/session.js";
import { applyRateLimit } from "../../../_lib/security.js";
import { createAuditContext } from "../../../_lib/telemetry.js";
import type { AssertionContract } from "../../../lib/trace-validator.js";

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== "POST") return res.status(405).json({ error: "Method not allowed" });
  if (!applyRateLimit(req, res, "start-exam")) return;

  const auth = await getAuth(req);
  if (!auth) return res.status(401).json({ error: "Unauthorized" });

  const audit = createAuditContext(req, "start-exam");
  const { slug } = req.query;

  if (!slug || typeof slug !== "string") {
    return res.status(400).json({ error: "Missing skill slug" });
  }

  const contractPath = path.join(process.cwd(), "exam-registry", slug, "assertion-contract.json");
  const scenarioPath = path.join(process.cwd(), "exam-registry", slug, "scenario.md");

  if (!fs.existsSync(contractPath) || !fs.existsSync(scenarioPath)) {
    return res.status(404).json({ error: "Skill exam not found in registry" });
  }

  const contract: AssertionContract = JSON.parse(fs.readFileSync(contractPath, "utf-8"));
  const scenario = fs.readFileSync(scenarioPath, "utf-8");

  // Generate dynamic parameters
  const dynamicParams: Record<string, string> = {};
  if (contract.dynamicParameters) {
    for (const [key, config] of Object.entries(contract.dynamicParameters)) {
      if (config.pool && config.pool.length > 0) {
        const selected = config.pool[Math.floor(Math.random() * config.pool.length)];
        dynamicParams[key] = selected.replace("{{rand}}", Math.floor(Math.random() * 1000).toString());
      }
    }
  }

  audit.log({
    action: "exam_start",
    actorUid: auth.uid,
    status: "success",
    statusCode: 200,
    detail: `Started exam for skill ${slug}`,
  });

  return res.status(200).json({
    skillId: slug,
    scenario,
    dynamicParams,
  });
}
