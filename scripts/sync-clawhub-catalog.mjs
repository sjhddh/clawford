import { mkdir, writeFile } from "node:fs/promises";
import { dirname, resolve } from "node:path";

const DEFAULT_BASE_URL = "https://clawhub.ai";
const DEFAULT_LIMIT = 100;
const DEFAULT_MAX_PAGES = 200;
const DEFAULT_OUT = "docs/generated/clawhub-skill-catalog.json";
const REQUEST_TIMEOUT_MS = 20_000;

function parseArgs(argv) {
  const options = {
    baseUrl: DEFAULT_BASE_URL,
    out: DEFAULT_OUT,
    limit: DEFAULT_LIMIT,
    maxPages: DEFAULT_MAX_PAGES,
    dryRun: false,
  };

  for (let i = 0; i < argv.length; i++) {
    const arg = argv[i];
    if (arg === "--base-url") options.baseUrl = argv[++i] ?? DEFAULT_BASE_URL;
    else if (arg === "--out") options.out = argv[++i] ?? DEFAULT_OUT;
    else if (arg === "--limit") options.limit = Number.parseInt(argv[++i] ?? "", 10) || DEFAULT_LIMIT;
    else if (arg === "--max-pages") options.maxPages = Number.parseInt(argv[++i] ?? "", 10) || DEFAULT_MAX_PAGES;
    else if (arg === "--dry-run") options.dryRun = true;
  }

  options.limit = Math.max(1, Math.min(200, options.limit));
  options.maxPages = Math.max(1, options.maxPages);
  return options;
}

function isSkillSlug(value) {
  return /^[a-z0-9][a-z0-9-]*$/.test(value);
}

async function fetchSkillPage(baseUrl, cursor, limit) {
  const url = new URL("/api/v1/packages", baseUrl);
  url.searchParams.set("family", "skill");
  url.searchParams.set("limit", String(limit));
  if (cursor) url.searchParams.set("cursor", cursor);

  const response = await fetch(url.toString(), { signal: AbortSignal.timeout(REQUEST_TIMEOUT_MS) });
  if (!response.ok) {
    const text = await response.text();
    throw new Error(`ClawHub catalog request failed (${response.status}): ${text}`);
  }

  const data = await response.json();
  const items = Array.isArray(data.items) ? data.items : [];
  return {
    items,
    nextCursor: typeof data.nextCursor === "string" ? data.nextCursor : null,
    url: url.toString(),
  };
}

async function main() {
  const options = parseArgs(process.argv.slice(2));
  const startedAt = new Date().toISOString();
  const slugs = new Set();
  const invalid = [];
  const cursors = new Set();

  let cursor = null;
  let pages = 0;
  let totalItemsSeen = 0;

  while (pages < options.maxPages) {
    const page = await fetchSkillPage(options.baseUrl, cursor, options.limit);
    pages++;
    totalItemsSeen += page.items.length;

    for (const item of page.items) {
      const slug = String(item?.name ?? "").trim().toLowerCase();
      if (!slug) continue;
      if (!isSkillSlug(slug)) {
        invalid.push(slug);
        continue;
      }
      slugs.add(slug);
    }

    if (!page.nextCursor) break;
    if (cursors.has(page.nextCursor)) {
      throw new Error(`Detected cursor loop at page ${pages}: ${page.nextCursor}`);
    }
    cursors.add(page.nextCursor);
    cursor = page.nextCursor;
    if (pages % 20 === 0) {
      console.error(`Fetched ${pages} pages, ${slugs.size} unique skill slugs so far...`);
    }
  }

  const sortedSlugs = Array.from(slugs).sort((a, b) => a.localeCompare(b));
  const payload = {
    source: {
      kind: "clawhub-api",
      baseUrl: options.baseUrl,
      endpoint: "/api/v1/packages?family=skill",
    },
    generatedAt: startedAt,
    pagination: {
      pageLimit: options.maxPages,
      pageSize: options.limit,
      pagesFetched: pages,
      stoppedDueToPageLimit: pages >= options.maxPages && cursor !== null,
    },
    stats: {
      totalItemsSeen,
      uniqueSkillSlugs: sortedSlugs.length,
      invalidSlugs: invalid.length,
    },
    slugs: sortedSlugs,
    invalidSamples: invalid.slice(0, 50),
  };

  if (options.dryRun) {
    console.log(JSON.stringify(payload, null, 2));
    return;
  }

  const outPath = resolve(process.cwd(), options.out);
  await mkdir(dirname(outPath), { recursive: true });
  await writeFile(outPath, `${JSON.stringify(payload, null, 2)}\n`, "utf8");
  console.log(`Wrote ${sortedSlugs.length} skill slugs to ${outPath}`);
}

await main();
