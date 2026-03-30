import { readdir, readFile, writeFile, mkdir } from "node:fs/promises";
import { resolve, dirname } from "node:path";

const DEFAULT_CATALOG = "docs/generated/clawhub-skill-catalog.json";
const DEFAULT_REGISTRY_ROOT = "exam-registry";
const DEFAULT_OUT = "docs/generated/clawhub-exam-coverage.json";

function parseArgs(argv) {
  const options = {
    catalog: DEFAULT_CATALOG,
    registryRoot: DEFAULT_REGISTRY_ROOT,
    out: DEFAULT_OUT,
    dryRun: false,
  };

  for (let i = 0; i < argv.length; i++) {
    const arg = argv[i];
    if (arg === "--catalog") options.catalog = argv[++i] ?? DEFAULT_CATALOG;
    else if (arg === "--registry-root") options.registryRoot = argv[++i] ?? DEFAULT_REGISTRY_ROOT;
    else if (arg === "--out") options.out = argv[++i] ?? DEFAULT_OUT;
    else if (arg === "--dry-run") options.dryRun = true;
  }
  return options;
}

function isSkillSlug(slug) {
  return /^[a-z0-9][a-z0-9-]*$/.test(slug);
}

async function readRegistrySlugs(registryRoot) {
  const entries = await readdir(registryRoot, { withFileTypes: true });
  return entries
    .filter((entry) => entry.isDirectory() && isSkillSlug(entry.name))
    .map((entry) => entry.name)
    .sort((a, b) => a.localeCompare(b));
}

async function main() {
  const options = parseArgs(process.argv.slice(2));
  const catalogPath = resolve(process.cwd(), options.catalog);
  const registryRoot = resolve(process.cwd(), options.registryRoot);

  const catalog = JSON.parse(await readFile(catalogPath, "utf8"));
  const catalogSlugs = new Set(
    (Array.isArray(catalog?.slugs) ? catalog.slugs : [])
      .map((slug) => String(slug).trim().toLowerCase())
      .filter((slug) => isSkillSlug(slug)),
  );
  const registrySlugs = await readRegistrySlugs(registryRoot);
  const registrySet = new Set(registrySlugs);

  const matched = registrySlugs.filter((slug) => catalogSlugs.has(slug));
  const missing = Array.from(catalogSlugs).filter((slug) => !registrySet.has(slug)).sort((a, b) => a.localeCompare(b));
  const orphaned = registrySlugs.filter((slug) => !catalogSlugs.has(slug));

  const coverage = catalogSlugs.size === 0 ? 0 : (matched.length / catalogSlugs.size) * 100;
  const report = {
    generatedAt: new Date().toISOString(),
    sourceCatalog: options.catalog,
    registryRoot: options.registryRoot,
    stats: {
      catalogCount: catalogSlugs.size,
      registeredCount: registrySlugs.length,
      matchedCount: matched.length,
      missingCount: missing.length,
      orphanedCount: orphaned.length,
      coveragePercent: Number(coverage.toFixed(2)),
    },
    missingSamples: missing.slice(0, 200),
    orphanedSamples: orphaned.slice(0, 200),
  };

  if (options.dryRun) {
    console.log(JSON.stringify(report, null, 2));
    return;
  }

  const outPath = resolve(process.cwd(), options.out);
  await mkdir(dirname(outPath), { recursive: true });
  await writeFile(outPath, `${JSON.stringify(report, null, 2)}\n`, "utf8");
  console.log(`Wrote coverage report to ${outPath}`);
}

await main();
