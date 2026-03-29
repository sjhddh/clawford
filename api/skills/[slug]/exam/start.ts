import type { VercelRequest, VercelResponse } from "@vercel/node";
import { createHash, randomBytes, randomInt } from "crypto";
import fs from "fs";
import path from "path";
import { authenticateRequest as getAuth } from "../../../_lib/session.js";
import { applyRateLimit } from "../../../_lib/security.js";
import { createAuditContext } from "../../../_lib/telemetry.js";
import { saveSkillExamAttempt } from "../../../_lib/blob.js";

const SKILL_SLUG_PATTERN = /^[a-z0-9][a-z0-9-]*$/;

/**
 * Assertion contracts define the grading rules for a skill exam.
 * They are distributed to the sandbox TEE which evaluates them locally
 * against the agent's execution trace. Clawford's server never executes
 * these rules — it only verifies the signed attestation the TEE produces.
 */
export interface AssertionContract {
  skillId: string;
  version?: string;
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
  if (!SKILL_SLUG_PATTERN.test(slug)) {
    return res.status(400).json({ error: "Invalid skill slug format" });
  }

  const examRegistryRoot = path.resolve(process.cwd(), "exam-registry");
  const skillDir = path.resolve(examRegistryRoot, slug);
  if (skillDir !== path.join(examRegistryRoot, slug)) {
    return res.status(400).json({ error: "Invalid skill slug" });
  }
  const contractPath = path.resolve(skillDir, "assertion-contract.json");
  const scenarioPath = path.resolve(skillDir, "scenario.md");

  let contract: AssertionContract;
  let scenario: string;
  let contractSource: string;

  if (!fs.existsSync(contractPath) || !fs.existsSync(scenarioPath)) {
    // Zero-Config Auto-Generated Fallback (Tier 2) for missing skills
    scenario = `# Auto-Generated Exam for ${slug}\n\nProve your capability by safely executing the core functions of this skill in your sandbox.`;
    contract = {
      skillId: slug,
      version: "auto-v1",
      tier: 2,
      passingScore: 50,
      credits: 1,
      semanticRubric: [{ dimension: "Output Quality", gradedBy: "llm" }],
      assertions: [
        { id: "efficiency-check", type: "efficiency", rule: "trace.runtime.totalSteps <= 30" },
        { id: "non-empty-run", type: "state", rule: "trace.fileDiffs.length > 0" },
      ],
    };
    contractSource = JSON.stringify(contract);
  } else {
    contractSource = fs.readFileSync(contractPath, "utf-8");
    contract = JSON.parse(contractSource);
    scenario = fs.readFileSync(scenarioPath, "utf-8");

    if (!Array.isArray(contract.assertions)) {
      return res.status(500).json({ error: `Malformed assertion contract for skill ${slug}: assertions must be an array` });
    }
  }

  // Generate dynamic parameters
  const dynamicParams: Record<string, string> = {};
  if (contract.dynamicParameters) {
    for (const [key, config] of Object.entries(contract.dynamicParameters)) {
      if (config.pool && config.pool.length > 0) {
        const selected = config.pool[randomInt(config.pool.length)];
        dynamicParams[key] = selected.replace("{{rand}}", randomInt(1000).toString());
      }
    }
  }

  // Strip dynamic parameter pools from the contract sent to the TEE —
  // only the resolved values are needed for evaluation.
  const contractForTEE = { ...contract };
  delete contractForTEE.dynamicParameters;
  const skillVersion = contract.version ?? "1.0.0";
  const skillHash = createHash("sha256").update(contractSource).digest("hex");
  const contractHash = createHash("sha256")
    .update(JSON.stringify({ contract: contractForTEE, dynamicParams, scenario }))
    .digest("hex");
  const examAttemptId = `skill-${Date.now()}-${randomBytes(6).toString("hex")}`;
  const challengeNonce = randomBytes(16).toString("hex");
  const startedAt = new Date();
  const expiresAt = new Date(startedAt.getTime() + 15 * 60_000).toISOString();

  await saveSkillExamAttempt(auth.uid, {
    examAttemptId,
    uid: auth.uid,
    skillId: slug,
    challengeNonce,
    contractHash,
    skillVersion,
    skillHash,
    tier: contract.tier,
    credits: contract.credits,
    passingScore: contract.passingScore,
    assertionIds: contract.assertions.map((item) => item.id),
    dynamicParams,
    startedAt: startedAt.toISOString(),
    expiresAt,
    status: "started",
  });

  audit.log({
    action: "exam_start",
    actorUid: auth.uid,
    status: "success",
    statusCode: 200,
    detail: `Started exam for skill ${slug} (Tier ${contract.tier})`,
  });

  return res.status(200).json({
    examAttemptId,
    challengeNonce,
    contractHash,
    skillVersion,
    skillHash,
    expiresAt,
    skillId: slug,
    tier: contract.tier,
    scenario,
    contract: contractForTEE,
    dynamicParams,
  });
}
