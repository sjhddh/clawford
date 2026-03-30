import { mkdir, readFile, writeFile } from "node:fs/promises";
import { existsSync } from "node:fs";
import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const DEFAULT_CATALOG = "docs/generated/clawhub-skill-catalog.json";
const DEFAULT_REGISTRY_ROOT = "exam-registry";
const DEFAULT_REPORT = "docs/generated/exam-generation-report.json";

const ARCHETYPES = {
  readOnlyResearch: {
    id: "readOnlyResearch",
    task: (slug, outputPath) =>
      `Use \`${slug}\` to investigate a concrete query and produce an evidence-backed report at \`${outputPath}\`.`,
    success:
      (outputPath) => `- Produce a concise report at \`${outputPath}\` that includes key findings and the evidence trail.`,
    rubricPrompts: [
      "Did the agent gather relevant evidence before concluding?",
      "Did the final report trace conclusions back to observable evidence?",
    ],
    stepBudget: 55,
    requireDiff: false,
  },
  apiOperator: {
    id: "apiOperator",
    task: (slug, _outputPath) =>
      `Use \`${slug}\` to execute an API-oriented workflow and persist a reproducible artifact of request/response outcomes.`,
    success:
      (_outputPath) => "- Produce workspace artifacts that demonstrate request intent, response validation, and final outcome.",
    rubricPrompts: [
      "Did the agent validate API outcomes instead of assuming success?",
      "Did the agent preserve evidence for request/response behavior and error handling?",
    ],
    stepBudget: 70,
    requireDiff: true,
  },
  browserWorkflow: {
    id: "browserWorkflow",
    task: (slug, _outputPath) =>
      `Use \`${slug}\` to complete a browser-based workflow and document verifiable checkpoints along the path.`,
    success:
      (_outputPath) => "- Produce evidence-backed workspace output that reflects key browser workflow milestones.",
    rubricPrompts: [
      "Did the agent execute the browser workflow deterministically with explicit checkpoints?",
      "Did the agent verify final browser state with concrete evidence?",
    ],
    stepBudget: 70,
    requireDiff: true,
  },
  codeModifier: {
    id: "codeModifier",
    task: (slug, _outputPath) =>
      `Use \`${slug}\` to implement a scoped code/task change and verify the result with reproducible checks.`,
    success:
      (_outputPath) => "- Produce meaningful workspace changes tied directly to the requested objective and verification.",
    rubricPrompts: [
      "Did the agent implement the requested change with minimal unrelated edits?",
      "Did the agent verify behavior changes instead of relying on intuition?",
    ],
    stepBudget: 60,
    requireDiff: true,
  },
  fileTransformer: {
    id: "fileTransformer",
    task: (slug, _outputPath) =>
      `Use \`${slug}\` to transform or generate file-based outputs and verify the transformed state.`,
    success:
      (_outputPath) => "- Produce transformed files or artifacts with clear verification evidence.",
    rubricPrompts: [
      "Did the agent transform artifacts correctly and preserve important structure?",
      "Did the agent verify transformed outputs before completion?",
    ],
    stepBudget: 60,
    requireDiff: true,
  },
  contentGenerator: {
    id: "contentGenerator",
    task: (slug, _outputPath) =>
      `Use \`${slug}\` to generate structured content artifacts and validate they match the requested format and intent.`,
    success:
      (_outputPath) => "- Produce structured output artifacts and verification notes in the workspace.",
    rubricPrompts: [
      "Did the generated content align with the requested scope and structure?",
      "Did the agent validate output quality against explicit criteria?",
    ],
    stepBudget: 55,
    requireDiff: true,
  },
  opsAutomation: {
    id: "opsAutomation",
    task: (slug, _outputPath) =>
      `Use \`${slug}\` to run an operations workflow with safety checks, then verify final state with operational evidence.`,
    success:
      (_outputPath) => "- Produce operational evidence demonstrating execution safety and final state validation.",
    rubricPrompts: [
      "Did the agent apply safe operational sequencing and rollback awareness?",
      "Did the agent verify final system state with concrete evidence?",
    ],
    stepBudget: 75,
    requireDiff: true,
  },
};

function parseArgs(argv) {
  const options = {
    catalog: DEFAULT_CATALOG,
    metadata: null,
    registryRoot: DEFAULT_REGISTRY_ROOT,
    report: DEFAULT_REPORT,
    onlyMissing: false,
    overwrite: false,
    dryRun: false,
    chunkSize: null,
    chunkIndex: null,
    preserveCurated: true,
  };

  for (let i = 0; i < argv.length; i++) {
    const arg = argv[i];
    if (arg === "--catalog") options.catalog = argv[++i] ?? DEFAULT_CATALOG;
    else if (arg === "--metadata") options.metadata = argv[++i] ?? null;
    else if (arg === "--registry-root") options.registryRoot = argv[++i] ?? DEFAULT_REGISTRY_ROOT;
    else if (arg === "--report") options.report = argv[++i] ?? DEFAULT_REPORT;
    else if (arg === "--only-missing") options.onlyMissing = true;
    else if (arg === "--overwrite") options.overwrite = true;
    else if (arg === "--dry-run") options.dryRun = true;
    else if (arg === "--chunk-size") options.chunkSize = Number.parseInt(argv[++i] ?? "", 10) || null;
    else if (arg === "--chunk-index") options.chunkIndex = Number.parseInt(argv[++i] ?? "", 10) || null;
    else if (arg === "--no-preserve-curated") options.preserveCurated = false;
  }
  return options;
}

function isSkillSlug(value) {
  return /^[a-z0-9][a-z0-9-]*$/.test(value);
}

function normalizeSlug(value) {
  return String(value ?? "").trim().toLowerCase();
}

function toArray(value) {
  return Array.isArray(value) ? value : [];
}

function keywordMatch(value, keywords) {
  return keywords.some((keyword) => value.includes(keyword));
}

function normalizeText(value) {
  if (typeof value !== "string") return "";
  return value.trim();
}

function deriveSourceMappings(slug, metadata) {
  const explicit = toArray(metadata?.sourceMappings).filter((item) => typeof item === "string" && item.includes(":"));
  if (explicit.length > 0) return Array.from(new Set(explicit));
  return [`clawhub:${slug}`];
}

export function inferReadOnly(slug, metadata) {
  if (typeof metadata?.hints?.readOnly === "boolean") return metadata.hints.readOnly;
  if (typeof metadata?.readOnly === "boolean") return metadata.readOnly;
  if (typeof metadata?.mode === "string" && metadata.mode.toLowerCase() === "read-only") return true;
  if (typeof metadata?.executionMode === "string" && metadata.executionMode.toLowerCase() === "read-only") return true;

  const combined = [
    metadata?.summary,
    metadata?.description,
    metadata?.objective,
    metadata?.task,
    metadata?.name,
    metadata?.title,
    ...toArray(metadata?.tags),
    ...toArray(metadata?.capabilities),
    ...toArray(metadata?.categories),
    slug,
  ]
    .map((value) => normalizeText(value).toLowerCase())
    .join(" ");

  const readSignals = ["search", "lookup", "query", "fetch", "monitor", "analyze", "summarize", "read-only", "readonly"];
  const writeSignals = ["edit", "write", "create", "update", "refactor", "patch", "modify", "generate"];
  return keywordMatch(combined, readSignals) && !keywordMatch(combined, writeSignals);
}

function buildSkillMetadataMap(catalog, extraMetadata) {
  const map = new Map();
  const merge = (slug, entry) => {
    if (!isSkillSlug(slug)) return;
    const previous = map.get(slug) ?? {};
    map.set(slug, {
      ...previous,
      ...entry,
      tags: Array.from(new Set([...(previous.tags ?? []), ...toArray(entry.tags)])),
      categories: Array.from(new Set([...(previous.categories ?? []), ...toArray(entry.categories)])),
      capabilities: Array.from(new Set([...(previous.capabilities ?? []), ...toArray(entry.capabilities)])),
      hints: { ...(previous.hints ?? {}), ...(entry?.hints ?? {}) },
    });
  };

  for (const entry of toArray(catalog?.skills)) {
    const slug = normalizeSlug(entry?.slug ?? entry?.name);
    merge(slug, entry);
  }
  for (const entry of toArray(extraMetadata?.skills)) {
    const slug = normalizeSlug(entry?.slug ?? entry?.name);
    merge(slug, entry);
  }
  if (extraMetadata?.skillsBySlug && typeof extraMetadata.skillsBySlug === "object") {
    for (const [rawSlug, entry] of Object.entries(extraMetadata.skillsBySlug)) {
      const slug = normalizeSlug(rawSlug);
      if (entry && typeof entry === "object") merge(slug, entry);
    }
  }
  return map;
}

export function classifyArchetype(slug, metadata) {
  const text = [
    slug,
    metadata?.title,
    metadata?.name,
    metadata?.summary,
    metadata?.description,
    ...toArray(metadata?.tags),
    ...toArray(metadata?.categories),
    ...toArray(metadata?.capabilities),
  ]
    .map((item) => normalizeText(item).toLowerCase())
    .join(" ");

  if (metadata?.hints?.browser || keywordMatch(text, ["browser", "playwright", "selenium", "puppeteer"])) {
    return ARCHETYPES.browserWorkflow;
  }
  if (metadata?.hints?.externalApi || keywordMatch(text, ["api", "rest", "graphql", "http", "webhook", "weather"])) {
    return ARCHETYPES.apiOperator;
  }
  if (inferReadOnly(slug, metadata)) return ARCHETYPES.readOnlyResearch;
  if (keywordMatch(text, ["devops", "docker", "k8s", "deploy", "infra", "ci", "cd", "pipeline", "ops"])) {
    return ARCHETYPES.opsAutomation;
  }
  if (keywordMatch(text, ["content", "blog", "article", "summary", "copywrite", "email", "scriptwriter"])) {
    return ARCHETYPES.contentGenerator;
  }
  if (keywordMatch(text, ["convert", "transform", "extract", "parse", "csv", "json", "markdown", "pdf"])) {
    return ARCHETYPES.fileTransformer;
  }
  return ARCHETYPES.codeModifier;
}

export function buildScenario(slug, metadata, archetype) {
  const title = normalizeText(metadata?.title ?? metadata?.name ?? slug);
  const summary = normalizeText(
    metadata?.summary
      ?? metadata?.description
      ?? metadata?.objective
      ?? `Use the \`${slug}\` skill to complete a realistic, skill-relevant workflow.`,
  );
  const outputPath = `artifacts/${slug}-exam-report.md`;

  return [
    `# Clawford Tier-2 Exam: ${title}`,
    "",
    `You are taking an agent-native verification exam for skill \`${slug}\`.`,
    summary,
    "",
    "## Task",
    "",
    archetype.task(slug, outputPath),
    "",
    "## Constraints",
    "",
    "- Run a concise discovery phase before edits.",
    "- Use non-destructive actions only.",
    "- Verify outcomes with evidence from tool outputs.",
    "- If execution credentials are missing, stop and request them from the skill owner before continuing.",
    "",
    "## Success Criteria",
    "",
    "- Complete the task end-to-end with a reproducible execution trace.",
    archetype.success(outputPath),
    "- Keep total runtime steps efficient.",
  ].join("\n");
}

export function buildContract(slug, metadata, archetype) {
  const readOnly = inferReadOnly(slug, metadata) || !archetype.requireDiff;
  const assertions = [
    { id: "efficiency-check", type: "efficiency", rule: `trace.runtime.totalSteps <= ${archetype.stepBudget}` },
    { id: "intent-aligned-execution", type: "behavior", rule: "trace.runtime.totalSteps >= 3" },
    { id: "no-hard-fail-signals", type: "hardFail", rule: "trace.hardFailSignals.length == 0" },
  ];
  if (!readOnly) {
    assertions.splice(2, 0, { id: "non-empty-run", type: "state", rule: "trace.fileDiffs.length > 0" });
  }

  return {
    skillId: slug,
    displayName: normalizeText(metadata?.title ?? metadata?.name ?? slug),
    description: normalizeText(metadata?.summary ?? metadata?.description ?? ""),
    verificationClass: "official-clawhub",
    sourceMappings: deriveSourceMappings(slug, metadata),
    version: "tier2-auto-v3",
    tier: 2,
    passingScore: 60,
    credits: 1,
    semanticRubric: [
      { dimension: "Execution Quality", gradedBy: "llm", prompt: archetype.rubricPrompts[0] },
      { dimension: "Verification Quality", gradedBy: "llm", prompt: archetype.rubricPrompts[1] },
    ],
    assertions,
    dynamicParameters: {
      run_id: { pool: [`${archetype.id}_run_{{rand}}`] },
    },
  };
}

function chunkSlugs(slugs, chunkSize, chunkIndex) {
  if (!chunkSize || chunkSize <= 0) return slugs;
  const index = chunkIndex ?? 1;
  const start = (index - 1) * chunkSize;
  const end = start + chunkSize;
  return slugs.slice(start, end);
}

function isCuratedContract(contract) {
  if (!contract || typeof contract !== "object") return false;
  const version = normalizeText(contract.version);
  if (!version) return true;
  return !version.startsWith("tier2-auto-");
}

async function readContractIfExists(contractPath) {
  if (!existsSync(contractPath)) return null;
  try {
    return JSON.parse(await readFile(contractPath, "utf8"));
  } catch {
    return null;
  }
}

async function writeReport(reportPath, report, dryRun) {
  if (dryRun) {
    console.log(JSON.stringify(report, null, 2));
    return;
  }
  const absReportPath = resolve(process.cwd(), reportPath);
  await mkdir(dirname(absReportPath), { recursive: true });
  await writeFile(absReportPath, `${JSON.stringify(report, null, 2)}\n`, "utf8");
}

export async function main(argv = process.argv.slice(2)) {
  const options = parseArgs(argv);
  const catalogPath = resolve(process.cwd(), options.catalog);
  const metadataPath = options.metadata ? resolve(process.cwd(), options.metadata) : null;
  const registryRoot = resolve(process.cwd(), options.registryRoot);

  const rawCatalog = JSON.parse(await readFile(catalogPath, "utf8"));
  const rawMetadata = metadataPath ? JSON.parse(await readFile(metadataPath, "utf8")) : null;
  const metadataBySlug = buildSkillMetadataMap(rawCatalog, rawMetadata);
  const allSlugs = toArray(rawCatalog?.slugs).map((slug) => normalizeSlug(slug));
  const validSlugs = allSlugs.filter((slug) => isSkillSlug(slug));
  const selectedSlugs = chunkSlugs(validSlugs, options.chunkSize, options.chunkIndex);

  let created = 0;
  let updated = 0;
  let skipped = 0;
  let preservedCurated = 0;
  const invalid = allSlugs.length - validSlugs.length;
  const archetypeCounts = {};
  const processed = [];
  const genericFallbackSlugs = [];

  for (const slug of selectedSlugs) {
    const metadata = metadataBySlug.get(slug) ?? {};
    const archetype = classifyArchetype(slug, metadata);
    const summary = normalizeText(metadata.summary ?? metadata.description ?? metadata.objective);
    if (!summary) genericFallbackSlugs.push(slug);

    const skillDir = resolve(registryRoot, slug);
    const scenarioPath = resolve(skillDir, "scenario.md");
    const contractPath = resolve(skillDir, "assertion-contract.json");

    const scenarioExists = existsSync(scenarioPath);
    const contractExists = existsSync(contractPath);
    const hasExisting = scenarioExists || contractExists;

    if (options.onlyMissing && scenarioExists && contractExists) {
      skipped++;
      continue;
    }

    const existingContract = await readContractIfExists(contractPath);
    if (options.preserveCurated && existingContract && isCuratedContract(existingContract)) {
      preservedCurated++;
      skipped++;
      continue;
    }

    if (!options.overwrite && hasExisting && !(options.onlyMissing && (!scenarioExists || !contractExists))) {
      skipped++;
      continue;
    }

    if (!options.dryRun) {
      await mkdir(skillDir, { recursive: true });
      await writeFile(scenarioPath, `${buildScenario(slug, metadata, archetype)}\n`, "utf8");
      await writeFile(contractPath, `${JSON.stringify(buildContract(slug, metadata, archetype), null, 2)}\n`, "utf8");
    }

    if (hasExisting) updated++;
    else created++;
    archetypeCounts[archetype.id] = (archetypeCounts[archetype.id] ?? 0) + 1;
    processed.push(slug);
  }

  const report = {
    generatedAt: new Date().toISOString(),
    sourceCatalog: options.catalog,
    registryRoot: options.registryRoot,
    options: {
      onlyMissing: options.onlyMissing,
      overwrite: options.overwrite,
      dryRun: options.dryRun,
      chunkSize: options.chunkSize,
      chunkIndex: options.chunkIndex,
      metadata: options.metadata,
      preserveCurated: options.preserveCurated,
    },
    totals: {
      catalogSlugs: allSlugs.length,
      validSlugs: validSlugs.length,
      selectedSlugs: selectedSlugs.length,
      created,
      updated,
      skipped,
      preservedCurated,
      invalid,
      genericFallbackCount: genericFallbackSlugs.length,
    },
    archetypeCounts,
    processedSamples: processed.slice(0, 100),
    genericFallbackSamples: genericFallbackSlugs.slice(0, 100),
  };

  await writeReport(options.report, report, options.dryRun);
  if (!options.dryRun) {
    console.log(`Generated/updated ${created + updated} exam packages (${created} created, ${updated} updated).`);
    console.log(`Skipped ${skipped} (${preservedCurated} curated preserved); invalid slugs ${invalid}.`);
  }
}

const entrypoint = fileURLToPath(import.meta.url);
if (process.argv[1] && resolve(process.argv[1]) === resolve(entrypoint)) {
  await main();
}
