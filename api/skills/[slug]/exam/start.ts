import type { VercelRequest, VercelResponse } from "@vercel/node";
import { createHash, randomBytes, randomInt } from "crypto";
import fs from "fs";
import path from "path";
import { authenticateRequest as getAuth } from "../../../_lib/session.js";
import { getTranscript } from "../../../_lib/blob.js";
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
  displayName?: string;
  description?: string;
  sourceMappings?: string[];
  verificationClass?: "official-clawhub" | "official-open" | "community-submitted";
  version?: string;
  tier: 1 | 2 | 3;
  dynamicParameters?: Record<string, { pool: string[] }>;
  assertions: Array<{ id: string; type: "behavior" | "state" | "efficiency" | "hardFail"; rule: string }>;
  semanticRubric: Array<{ dimension: string; gradedBy: "llm"; prompt?: string }>;
  passingScore: number;
  credits: number;
}

function listRegisteredSkillSlugs(examRegistryRoot: string): string[] {
  try {
    return fs.readdirSync(examRegistryRoot, { withFileTypes: true })
      .filter((entry) => entry.isDirectory() && SKILL_SLUG_PATTERN.test(entry.name))
      .filter((entry) => {
        const directory = path.resolve(examRegistryRoot, entry.name);
        return (
          fs.existsSync(path.resolve(directory, "assertion-contract.json"))
          && fs.existsSync(path.resolve(directory, "scenario.md"))
        );
      })
      .map((entry) => entry.name)
      .sort((left, right) => left.localeCompare(right));
  } catch {
    return [];
  }
}

function scoreSuggestedSlug(target: string, candidate: string): number {
  if (candidate === target) return Number.MAX_SAFE_INTEGER;
  const targetTokens = target.split("-").filter(Boolean);
  const candidateTokens = candidate.split("-").filter(Boolean);
  const overlap = targetTokens.filter((token) => candidateTokens.includes(token)).length;
  let score = overlap * 10;
  if (candidate.includes(target) || target.includes(candidate)) score += 25;
  if (candidate.startsWith(target) || target.startsWith(candidate)) score += 15;
  return score;
}

function findSuggestedSkillSlugs(target: string, examRegistryRoot: string, limit = 5): string[] {
  return listRegisteredSkillSlugs(examRegistryRoot)
    .map((candidate) => ({ candidate, score: scoreSuggestedSlug(target, candidate) }))
    .filter((row) => row.score > 0)
    .sort((left, right) => right.score - left.score || left.candidate.localeCompare(right.candidate))
    .slice(0, limit)
    .map((row) => row.candidate);
}

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== "POST") return res.status(405).json({ error: "Method not allowed" });
  if (!applyRateLimit(req, res, "start-exam")) return;

  const auth = await getAuth(req);
  if (!auth) return res.status(401).json({ error: "Unauthorized" });

  const transcript = await getTranscript(auth.uid);
  if (!transcript || transcript.currentState === "applicant" || transcript.currentState === "freshman") {
    return res.status(403).json({ 
      error: "Foundations Prerequisite Required", 
      message: "Agents must graduate from the Clawford Foundations curriculum before starting open skill verification exams." 
    });
  }

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

  if (!fs.existsSync(contractPath) || !fs.existsSync(scenarioPath)) {
    const suggestedSlugs = findSuggestedSkillSlugs(slug, examRegistryRoot);
    audit.log({
      action: "exam_start",
      actorUid: auth.uid,
      status: "rejected",
      statusCode: 404,
      detail: `Rejected exam start for unregistered skill ${slug}`,
    });
    return res.status(404).json({
      error: "Skill exam not found",
      message: "This skill is not exam-registered in Clawford. Only registry-backed skill slugs are exam-eligible.",
      code: "SKILL_EXAM_NOT_FOUND",
      suggestedSlugs,
      nextAction: {
        registry: "/api/skills?limit=100",
        exactStart: "/api/skills/{slug}/exam/start",
      },
    });
  }

  const contractSource = fs.readFileSync(contractPath, "utf-8");
  const contract = JSON.parse(contractSource) as AssertionContract;
  const scenario = fs.readFileSync(scenarioPath, "utf-8");

  if (!Array.isArray(contract.assertions)) {
    return res.status(500).json({ error: `Malformed assertion contract for skill ${slug}: assertions must be an array` });
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
  const verificationClass = contract.verificationClass ?? "official-clawhub";
  const sourceMappings = Array.isArray(contract.sourceMappings) ? contract.sourceMappings : [`clawhub:${slug}`];
  const examAttemptId = `skill-${Date.now()}-${randomBytes(6).toString("hex")}`;
  const challengeNonce = randomBytes(16).toString("hex");
  const startedAt = new Date();
  const expiresAt = new Date(startedAt.getTime() + 15 * 60_000).toISOString();

  await saveSkillExamAttempt(auth.uid, {
    examAttemptId,
    uid: auth.uid,
    skillId: slug,
    verificationClass,
    sourceMappings,
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
    displayName: contract.displayName ?? slug,
    description: contract.description ?? "",
    verificationClass,
    sourceMappings,
    tier: contract.tier,
    scenario,
    contract: contractForTEE,
    dynamicParams,
  });
}
