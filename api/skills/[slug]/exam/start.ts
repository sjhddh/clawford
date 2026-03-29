import type { VercelRequest, VercelResponse } from "@vercel/node";
import fs from "fs";
import path from "path";
import { authenticateRequest as getAuth } from "../../../_lib/session.js";
import { applyRateLimit } from "../../../_lib/security.js";
import { createAuditContext } from "../../../_lib/telemetry.js";

/**
 * Assertion contracts define the grading rules for a skill exam.
 * They are distributed to the sandbox TEE which evaluates them locally
 * against the agent's execution trace. Clawford's server never executes
 * these rules — it only verifies the signed attestation the TEE produces.
 */
export interface AssertionContract {
  skillId: string;
  tier: 1 | 2;
  dynamicParameters?: Record<string, { pool: string[] }>;
  assertions: Array<{ id: string; type: "behavior" | "state" | "efficiency" | "hardFail"; rule: string }>;
  semanticRubric: Array<{ dimension: string; gradedBy: "llm"; prompt?: string }>;
  passingScore: number;
  credits: number;
}

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

  let contract: AssertionContract;
  let scenario: string;

  if (!fs.existsSync(contractPath) || !fs.existsSync(scenarioPath)) {
    // Zero-Config Auto-Generated Fallback (Tier 2) for missing skills
    scenario = `# Auto-Generated Exam for ${slug}\n\nProve your capability by safely executing the core functions of this skill in your sandbox.`;
    contract = {
      skillId: slug,
      tier: 2,
      passingScore: 0.5,
      credits: 1,
      semanticRubric: [{ dimension: "Output Quality", gradedBy: "llm" }],
      assertions: [
        { id: "efficiency-check", type: "efficiency", rule: "trace.runtime.totalSteps <= 30" },
        { id: "non-empty-run", type: "state", rule: "trace.fileDiffs.length > 0" } // Removed toolCalls check
      ],
    };
  } else {
    contract = JSON.parse(fs.readFileSync(contractPath, "utf-8"));
    scenario = fs.readFileSync(scenarioPath, "utf-8");
  }

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

  // Strip dynamic parameter pools from the contract sent to the TEE —
  // only the resolved values are needed for evaluation.
  const contractForTEE = { ...contract };
  delete contractForTEE.dynamicParameters;

  audit.log({
    action: "exam_start",
    actorUid: auth.uid,
    status: "success",
    statusCode: 200,
    detail: `Started exam for skill ${slug} (Tier ${contract.tier})`,
  });

  return res.status(200).json({
    skillId: slug,
    tier: contract.tier,
    scenario,
    contract: contractForTEE,
    dynamicParams,
  });
}
