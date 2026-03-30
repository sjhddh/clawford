import { mkdir, readFile, writeFile } from "node:fs/promises";
import { existsSync } from "node:fs";
import { dirname, resolve } from "node:path";

const DEFAULT_CATALOG = "docs/generated/clawhub-skill-catalog.json";
const DEFAULT_REGISTRY_ROOT = "exam-registry";
const DEFAULT_REPORT = "docs/generated/exam-generation-report.json";

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
  }

  return options;
}

function isSkillSlug(value) {
  return /^[a-z0-9][a-z0-9-]*$/.test(value);
}

function normalizeSlug(value) {
  return String(value ?? "")
    .trim()
    .toLowerCase();
}

function keywordMatch(value, keywords) {
  return keywords.some((keyword) => value.includes(keyword));
}

function inferReadOnly(slug, metadata) {
  if (typeof metadata?.readOnly === "boolean") return metadata.readOnly;
  if (typeof metadata?.mode === "string" && metadata.mode.toLowerCase() === "read-only") return true;
  if (typeof metadata?.executionMode === "string" && metadata.executionMode.toLowerCase() === "read-only") return true;

  const textFields = [
    metadata?.summary,
    metadata?.description,
    metadata?.objective,
    metadata?.task,
    metadata?.name,
    slug,
  ]
    .filter(Boolean)
    .map((value) => String(value).toLowerCase());
  const text = textFields.join(" ");

  const tagValues = [
    ...(Array.isArray(metadata?.tags) ? metadata.tags : []),
    ...(Array.isArray(metadata?.capabilities) ? metadata.capabilities : []),
    ...(Array.isArray(metadata?.categories) ? metadata.categories : []),
  ]
    .map((value) => String(value).toLowerCase())
    .join(" ");

  const combined = `${text} ${tagValues}`;
  const readSignals = ["search", "lookup", "query", "fetch", "monitor", "analyze", "summarize", "read-only", "readonly"];
  const writeSignals = ["edit", "write", "create", "update", "refactor", "patch", "modify", "generate-file"];

  if (keywordMatch(combined, readSignals) && !keywordMatch(combined, writeSignals)) return true;
  return false;
}

function buildSkillMetadataMap(catalog, extraMetadata) {
  const map = new Map();
  const toArray = (value) => (Array.isArray(value) ? value : []);

  const catalogSkills = toArray(catalog?.skills);
  for (const entry of catalogSkills) {
    const slug = normalizeSlug(entry?.slug ?? entry?.name);
    if (isSkillSlug(slug)) map.set(slug, entry);
  }

  const extraSkills = toArray(extraMetadata?.skills);
  for (const entry of extraSkills) {
    const slug = normalizeSlug(entry?.slug ?? entry?.name);
    if (isSkillSlug(slug)) map.set(slug, { ...(map.get(slug) ?? {}), ...entry });
  }

  const extraBySlug = extraMetadata?.skillsBySlug;
  if (extraBySlug && typeof extraBySlug === "object" && !Array.isArray(extraBySlug)) {
    for (const [rawSlug, entry] of Object.entries(extraBySlug)) {
      const slug = normalizeSlug(rawSlug);
      if (!isSkillSlug(slug)) continue;
      map.set(slug, { ...(map.get(slug) ?? {}), ...(entry && typeof entry === "object" ? entry : {}) });
    }
  }

  return map;
}

function buildScenario(slug, metadata) {
  const title = String(metadata?.title ?? metadata?.name ?? slug).trim();
  const summary = String(
    metadata?.summary ??
      metadata?.description ??
      metadata?.objective ??
      `Use the \`${slug}\` skill to complete an exam-ready workflow.`,
  ).trim();
  const readOnly = inferReadOnly(slug, metadata);
  const outputPath = `artifacts/${slug}-exam-report.md`;

  const taskLine = readOnly
    ? `Use \`${slug}\` to gather evidence for a concrete query, then write a concise report to \`${outputPath}\`.`
    : `Use \`${slug}\` to execute a real task and commit the outcome as meaningful workspace changes.`;

  return [
    `# Clawford Tier-2 Exam: ${title}`,
    "",
    `You are taking an agent-native verification exam for skill \`${slug}\`.`,
    summary,
    "",
    "## Task",
    "",
    taskLine,
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
    readOnly
      ? `- Produce a human-readable report at \`${outputPath}\` summarizing inputs, tool output evidence, and final result.`
      : "- Produce workspace changes that are directly tied to the task objective.",
    "- Keep total runtime steps efficient.",
  ].join("\n");
}

function buildContract(slug, metadata) {
  const readOnly = inferReadOnly(slug, metadata);
  const assertions = [
    { id: "efficiency-check", type: "efficiency", rule: "trace.runtime.totalSteps <= 60" },
    { id: "tool-invoked", type: "tool_usage", rule: `trace.toolsUsed.includes('${slug}')` },
    { id: "no-hard-fail-signals", type: "hardFail", rule: "trace.hardFailSignals.length == 0" },
  ];

  if (!readOnly) {
    assertions.splice(2, 0, { id: "non-empty-run", type: "state", rule: "trace.fileDiffs.length > 0" });
  }

  return {
    skillId: slug,
    version: "tier2-auto-v2",
    tier: 2,
    passingScore: 60,
    credits: 1,
    semanticRubric: [
      { dimension: "Execution Quality", gradedBy: "llm" },
      { dimension: "Verification Quality", gradedBy: "llm" },
    ],
    assertions,
    dynamicParameters: {
      run_id: { pool: ["tier2_run_{{rand}}"] },
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

async function writeReport(reportPath, report, dryRun) {
  if (dryRun) {
    console.log(JSON.stringify(report, null, 2));
    return;
  }
  const absReportPath = resolve(process.cwd(), reportPath);
  await mkdir(dirname(absReportPath), { recursive: true });
  await writeFile(absReportPath, `${JSON.stringify(report, null, 2)}\n`, "utf8");
}

async function main() {
  const options = parseArgs(process.argv.slice(2));
  const catalogPath = resolve(process.cwd(), options.catalog);
  const metadataPath = options.metadata ? resolve(process.cwd(), options.metadata) : null;
  const registryRoot = resolve(process.cwd(), options.registryRoot);

  const rawCatalog = JSON.parse(await readFile(catalogPath, "utf8"));
  const rawMetadata = metadataPath ? JSON.parse(await readFile(metadataPath, "utf8")) : null;
  const metadataBySlug = buildSkillMetadataMap(rawCatalog, rawMetadata);
  const allSlugs = Array.isArray(rawCatalog?.slugs) ? rawCatalog.slugs.map((s) => String(s).trim().toLowerCase()) : [];
  const validSlugs = allSlugs.filter((slug) => isSkillSlug(slug));
  const selectedSlugs = chunkSlugs(validSlugs, options.chunkSize, options.chunkIndex);

  let created = 0;
  let updated = 0;
  let skipped = 0;
  let invalid = allSlugs.length - validSlugs.length;
  let readOnlyContracts = 0;
  const processed = [];

  for (const slug of selectedSlugs) {
    const metadata = metadataBySlug.get(slug);
    const readOnly = inferReadOnly(slug, metadata);
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
    if (!options.overwrite && hasExisting && !(options.onlyMissing && (!scenarioExists || !contractExists))) {
      skipped++;
      continue;
    }

    if (!options.dryRun) {
      await mkdir(skillDir, { recursive: true });
      await writeFile(scenarioPath, `${buildScenario(slug, metadata)}\n`, "utf8");
      await writeFile(contractPath, `${JSON.stringify(buildContract(slug, metadata), null, 2)}\n`, "utf8");
    }

    if (hasExisting) updated++;
    else created++;
    if (readOnly) readOnlyContracts++;
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
    },
    totals: {
      catalogSlugs: allSlugs.length,
      validSlugs: validSlugs.length,
      selectedSlugs: selectedSlugs.length,
      created,
      updated,
      skipped,
      invalid,
      readOnlyContracts,
    },
    processedSamples: processed.slice(0, 100),
  };

  await writeReport(options.report, report, options.dryRun);
  if (!options.dryRun) {
    console.log(`Generated/updated ${created + updated} exam packages (${created} created, ${updated} updated).`);
    console.log(`Skipped ${skipped}; invalid slugs ${invalid}.`);
  }
}

await main();
