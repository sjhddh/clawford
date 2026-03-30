import { readFile, readdir } from "node:fs/promises";
import { resolve } from "node:path";
import process from "node:process";

const DEFAULT_REGISTRY_ROOT = "exam-registry";
const ALLOWED_ASSERTION_TYPES = new Set(["behavior", "state", "efficiency", "hardFail"]);

function parseArgs(argv) {
  const options = {
    registryRoot: DEFAULT_REGISTRY_ROOT,
    strict: false,
    relevance: false,
  };

  for (let i = 0; i < argv.length; i++) {
    const arg = argv[i];
    if (arg === "--registry-root") options.registryRoot = argv[++i] ?? DEFAULT_REGISTRY_ROOT;
    else if (arg === "--strict") options.strict = true;
    else if (arg === "--relevance") options.relevance = true;
  }
  return options;
}

function isSkillSlug(slug) {
  return /^[a-z0-9][a-z0-9-]*$/.test(slug);
}

function validateContractShape(slug, contract) {
  const errors = [];

  if (!contract || typeof contract !== "object") {
    errors.push("contract must be a JSON object");
    return errors;
  }

  if (contract.skillId !== slug) {
    errors.push(`contract.skillId must match folder slug (${slug})`);
  }
  if (![1, 2, 3].includes(contract.tier)) {
    errors.push("contract.tier must be one of 1, 2, 3");
  }
  if (!Number.isFinite(contract.passingScore) || contract.passingScore < 0 || contract.passingScore > 100) {
    errors.push("contract.passingScore must be a number between 0 and 100");
  }
  if (!Number.isFinite(contract.credits) || contract.credits < 0) {
    errors.push("contract.credits must be a non-negative number");
  }
  if (!Array.isArray(contract.semanticRubric) || contract.semanticRubric.length === 0) {
    errors.push("contract.semanticRubric must be a non-empty array");
  }
  if (!Array.isArray(contract.assertions) || contract.assertions.length === 0) {
    errors.push("contract.assertions must be a non-empty array");
  } else {
    const seen = new Set();
    for (const assertion of contract.assertions) {
      if (!assertion || typeof assertion !== "object") {
        errors.push("each assertion must be an object");
        continue;
      }
      if (typeof assertion.id !== "string" || assertion.id.trim().length === 0) {
        errors.push("each assertion must have a non-empty string id");
      } else if (seen.has(assertion.id)) {
        errors.push(`duplicate assertion id: ${assertion.id}`);
      } else {
        seen.add(assertion.id);
      }
      if (!ALLOWED_ASSERTION_TYPES.has(assertion.type)) {
        errors.push(`assertion.type must be one of ${Array.from(ALLOWED_ASSERTION_TYPES).join(", ")}`);
      }
      if (typeof assertion.rule !== "string" || assertion.rule.trim().length === 0) {
        errors.push("each assertion must have a non-empty string rule");
      }
    }
  }

  return errors;
}

async function main() {
  const options = parseArgs(process.argv.slice(2));
  const registryRoot = resolve(process.cwd(), options.registryRoot);
  const entries = await readdir(registryRoot, { withFileTypes: true });

  const skillDirs = entries
    .filter((entry) => entry.isDirectory())
    .map((entry) => entry.name)
    .sort((a, b) => a.localeCompare(b));

  const violations = [];
  let checked = 0;
  let relevanceWarnings = 0;

  for (const slug of skillDirs) {
    if (!isSkillSlug(slug)) {
      violations.push(`[${slug}] invalid directory slug format`);
      continue;
    }

    const scenarioPath = resolve(registryRoot, slug, "scenario.md");
    const contractPath = resolve(registryRoot, slug, "assertion-contract.json");

    let scenarioText = "";
    try {
      scenarioText = await readFile(scenarioPath, "utf8");
      if (!scenarioText.trim()) violations.push(`[${slug}] scenario.md is empty`);
      if (options.relevance && scenarioText.includes("exam-ready workflow")) {
        relevanceWarnings++;
        violations.push(`[${slug}] scenario.md uses generic fallback wording (exam-ready workflow)`);
      }
    } catch {
      violations.push(`[${slug}] missing scenario.md`);
    }

    let contract;
    try {
      contract = JSON.parse(await readFile(contractPath, "utf8"));
    } catch {
      violations.push(`[${slug}] missing or invalid assertion-contract.json`);
      continue;
    }

    const contractErrors = validateContractShape(slug, contract);
    for (const err of contractErrors) {
      violations.push(`[${slug}] ${err}`);
    }
    if (options.relevance) {
      const isAutoTier2 = typeof contract.version === "string" && contract.version.startsWith("tier2-auto-");
      if (isAutoTier2) {
        if (!contract.assertions.some((item) => item?.type === "behavior")) {
          violations.push(`[${slug}] tier2-auto contract missing behavior assertion`);
        }
        if (!Array.isArray(contract.semanticRubric) || contract.semanticRubric.some((item) => typeof item?.prompt !== "string" || item.prompt.trim() === "")) {
          violations.push(`[${slug}] tier2-auto contract semanticRubric entries must include prompt text`);
        }
      }
    }
    checked++;
  }

  const summary = {
    registryRoot: options.registryRoot,
    checkedSkillDirectories: checked,
    violationCount: violations.length,
    relevanceWarnings,
  };

  if (violations.length === 0) {
    console.log(`Exam registry validation passed: ${JSON.stringify(summary)}`);
    return;
  }

  console.error(`Exam registry validation failed: ${JSON.stringify(summary)}`);
  for (const violation of violations) {
    console.error(`- ${violation}`);
  }

  process.exit(1);
}

await main();
