import type { VercelRequest, VercelResponse } from "@vercel/node";
import { readdirSync, readFileSync, existsSync } from "node:fs";
import { resolve } from "node:path";
import { applyRateLimit } from "./_lib/security.js";

type SkillItem = {
  slug: string;
  displayName: string;
  description: string;
  sourceMappings: string[];
  verificationClass: "official-clawhub" | "official-open" | "community-submitted";
  examStatus: "examable";
  tier: 1 | 2 | 3;
  version: string | null;
};

function isSkillSlug(slug: string): boolean {
  return /^[a-z0-9][a-z0-9-]*$/.test(slug);
}

function parseLimit(raw: unknown): number {
  const value = Number.parseInt(String(raw ?? ""), 10);
  if (!Number.isFinite(value)) return 100;
  return Math.max(1, Math.min(500, value));
}

function parseCursor(raw: unknown): number {
  const value = Number.parseInt(String(raw ?? ""), 10);
  if (!Number.isFinite(value) || value < 0) return 0;
  return value;
}

function parseOptionalQuery(raw: unknown): string | null {
  if (typeof raw !== "string") return null;
  const value = raw.trim().toLowerCase();
  return value.length > 0 ? value : null;
}

function loadRegistryItems(): SkillItem[] {
  const registryRoot = resolve(process.cwd(), "exam-registry");
  const entries = readdirSync(registryRoot, { withFileTypes: true });
  const rows: SkillItem[] = [];

  for (const entry of entries) {
    if (!entry.isDirectory()) continue;
    if (!isSkillSlug(entry.name)) continue;
    const contractPath = resolve(registryRoot, entry.name, "assertion-contract.json");
    const scenarioPath = resolve(registryRoot, entry.name, "scenario.md");
    if (!existsSync(contractPath) || !existsSync(scenarioPath)) continue;

    try {
      const contract = JSON.parse(readFileSync(contractPath, "utf8")) as {
        tier?: 1 | 2 | 3;
        version?: string;
        displayName?: string;
        description?: string;
        sourceMappings?: string[];
        verificationClass?: "official-clawhub" | "official-open" | "community-submitted";
      };
      const sourceMappings = Array.isArray(contract.sourceMappings) && contract.sourceMappings.length > 0
        ? contract.sourceMappings.filter((entry) => typeof entry === "string")
        : [`clawhub:${entry.name}`];
      rows.push({
        slug: entry.name,
        displayName: typeof contract.displayName === "string" ? contract.displayName : entry.name,
        description: typeof contract.description === "string" ? contract.description : "",
        sourceMappings,
        verificationClass: contract.verificationClass ?? "official-clawhub",
        examStatus: "examable",
        tier: contract.tier ?? 2,
        version: contract.version ?? null,
      });
    } catch {
      rows.push({
        slug: entry.name,
        displayName: entry.name,
        description: "",
        sourceMappings: [`clawhub:${entry.name}`],
        verificationClass: "official-clawhub",
        examStatus: "examable",
        tier: 2,
        version: null,
      });
    }
  }

  return rows.sort((a, b) => a.slug.localeCompare(b.slug));
}

function loadCatalogSlugs(): Set<string> | null {
  const catalogPath = resolve(process.cwd(), "docs/generated/clawhub-skill-catalog.json");
  if (!existsSync(catalogPath)) return null;
  try {
    const payload = JSON.parse(readFileSync(catalogPath, "utf8")) as { slugs?: string[] };
    const slugs = Array.isArray(payload.slugs) ? payload.slugs : [];
    return new Set(
      slugs
        .map((slug) => String(slug).trim().toLowerCase())
        .filter((slug) => isSkillSlug(slug)),
    );
  } catch {
    return null;
  }
}

function loadCatalogStats():
  | {
      source: "clawhub";
      totalPublishedSkills: number;
    }
  | null {
  const catalogPath = resolve(process.cwd(), "docs/generated/clawhub-skill-catalog.json");
  if (!existsSync(catalogPath)) return null;
  try {
    const payload = JSON.parse(readFileSync(catalogPath, "utf8")) as {
      skills?: unknown[];
      slugs?: unknown[];
    };
    const skillsCount = Array.isArray(payload.skills) ? payload.skills.length : 0;
    const slugsCount = Array.isArray(payload.slugs) ? payload.slugs.length : 0;
    return {
      source: "clawhub",
      totalPublishedSkills: Math.max(skillsCount, slugsCount),
    };
  } catch {
    return null;
  }
}

function loadCoverageReport():
  | {
      generatedAt: string;
      stats: {
        catalogCount: number;
        registeredCount: number;
        matchedCount: number;
        missingCount: number;
        orphanedCount: number;
        coveragePercent: number;
      };
    }
  | null {
  const reportPath = resolve(process.cwd(), "docs/generated/clawhub-exam-coverage.json");
  if (!existsSync(reportPath)) return null;
  try {
    const payload = JSON.parse(readFileSync(reportPath, "utf8")) as {
      generatedAt?: string;
      stats?: {
        catalogCount?: number;
        registeredCount?: number;
        matchedCount?: number;
        missingCount?: number;
        orphanedCount?: number;
        coveragePercent?: number;
      };
    };
    if (!payload.stats) return null;
    return {
      generatedAt: String(payload.generatedAt ?? ""),
      stats: {
        catalogCount: Number(payload.stats.catalogCount ?? 0),
        registeredCount: Number(payload.stats.registeredCount ?? 0),
        matchedCount: Number(payload.stats.matchedCount ?? 0),
        missingCount: Number(payload.stats.missingCount ?? 0),
        orphanedCount: Number(payload.stats.orphanedCount ?? 0),
        coveragePercent: Number(payload.stats.coveragePercent ?? 0),
      },
    };
  } catch {
    return null;
  }
}

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== "GET") return res.status(405).json({ error: "Method not allowed" });
  if (!applyRateLimit(req, res, "skills")) return;

  const allItems = loadRegistryItems();
  const catalogSlugs = loadCatalogSlugs();
  const sourceCatalog = loadCatalogStats();
  const search = parseOptionalQuery(req.query.search);
  const slug = parseOptionalQuery(req.query.slug);
  const filteredItems = allItems.filter((item) => {
    if (slug && item.slug !== slug) return false;
    if (!search) return true;

    const searchable = [
      item.slug,
      item.displayName,
      item.description,
      ...item.sourceMappings,
    ]
      .join(" ")
      .toLowerCase();
    return searchable.includes(search);
  });
  const limit = parseLimit(req.query.limit);
  const cursorOffset = parseCursor(req.query.cursor);
  const items = filteredItems.slice(cursorOffset, cursorOffset + limit);
  const nextCursor = cursorOffset + limit < filteredItems.length ? String(cursorOffset + limit) : null;

  const coverageReport = loadCoverageReport();
  const coverage = coverageReport
    ? coverageReport
    : catalogSlugs
      ? {
          generatedAt: "",
          stats: {
            catalogCount: catalogSlugs.size,
            registeredCount: allItems.length,
            matchedCount: allItems.filter((item) => catalogSlugs.has(item.slug)).length,
            missingCount: Array.from(catalogSlugs).filter((slug) => !allItems.some((item) => item.slug === slug)).length,
            orphanedCount: allItems.filter((item) => !catalogSlugs.has(item.slug)).length,
            coveragePercent:
              catalogSlugs.size === 0
                ? 0
                : Number(
                    (
                      (allItems.filter((item) => catalogSlugs.has(item.slug)).length / catalogSlugs.size) * 100
                    ).toFixed(2),
                  ),
          },
        }
      : null;

  return res.status(200).json({
    discovery: {
      sourceCatalog,
      examRegistry: {
        totalExamableSkills: allItems.length,
      },
    },
    items,
    total: filteredItems.length,
    limit,
    cursor: String(cursorOffset),
    nextCursor,
    filters: {
      search,
      slug,
    },
    coverage,
  });
}
