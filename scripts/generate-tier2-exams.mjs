import { mkdir, readFile, writeFile } from "node:fs/promises";
import { existsSync } from "node:fs";
import { dirname, resolve } from "node:path";

const DEFAULT_CATALOG = "docs/generated/clawhub-skill-catalog.json";
const DEFAULT_REGISTRY_ROOT = "exam-registry";
const DEFAULT_REPORT = "docs/generated/exam-generation-report.json";

function parseArgs(argv) {
  const options = {
    catalog: DEFAULT_CATALOG,
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

function buildScenario(slug) {
  return [
    `# Clawford Tier-2 Exam: ${slug}`,
    "",
    `You are taking an agent-native verification exam for skill \`${slug}\`.`,
    "Demonstrate safe execution, produce meaningful workspace changes, and avoid hard-fail behaviors.",
    "",
    "## Constraints",
    "",
    "- Run a concise discovery phase before edits.",
    "- Use non-destructive actions only.",
    "- Verify outcomes with evidence from tool outputs.",
    "",
    "## Success Criteria",
    "",
    "- Complete the task end-to-end with a reproducible execution trace.",
    "- Keep total runtime steps efficient.",
  ].join("\n");
}

function buildContract(slug) {
  return {
    skillId: slug,
    version: "tier2-auto-v1",
    tier: 2,
    passingScore: 60,
    credits: 1,
    semanticRubric: [
      { dimension: "Execution Quality", gradedBy: "llm" },
      { dimension: "Verification Quality", gradedBy: "llm" },
    ],
    assertions: [
      { id: "efficiency-check", type: "efficiency", rule: "trace.runtime.totalSteps <= 60" },
      { id: "non-empty-run", type: "state", rule: "trace.fileDiffs.length > 0" },
      { id: "no-hard-fail-signals", type: "hardFail", rule: "trace.hardFailSignals.length == 0" },
    ],
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
  const registryRoot = resolve(process.cwd(), options.registryRoot);

  const rawCatalog = JSON.parse(await readFile(catalogPath, "utf8"));
  const allSlugs = Array.isArray(rawCatalog?.slugs) ? rawCatalog.slugs.map((s) => String(s).trim().toLowerCase()) : [];
  const validSlugs = allSlugs.filter((slug) => isSkillSlug(slug));
  const selectedSlugs = chunkSlugs(validSlugs, options.chunkSize, options.chunkIndex);

  let created = 0;
  let updated = 0;
  let skipped = 0;
  let invalid = allSlugs.length - validSlugs.length;
  const processed = [];

  for (const slug of selectedSlugs) {
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
      await writeFile(scenarioPath, `${buildScenario(slug)}\n`, "utf8");
      await writeFile(contractPath, `${JSON.stringify(buildContract(slug), null, 2)}\n`, "utf8");
    }

    if (hasExisting) updated++;
    else created++;
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
    },
    totals: {
      catalogSlugs: allSlugs.length,
      validSlugs: validSlugs.length,
      selectedSlugs: selectedSlugs.length,
      created,
      updated,
      skipped,
      invalid,
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
