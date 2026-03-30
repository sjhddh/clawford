import type { VercelRequest, VercelResponse } from "@vercel/node";
import { readdirSync, readFileSync, existsSync } from "node:fs";
import { resolve } from "node:path";
import { applyRateLimit } from "./_lib/security.js";

type SkillItem = {
  slug: string;
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

function loadRegistryItems(): SkillItem[] {
  const registryRoot = resolve(process.cwd(), "exam-registry");
  const entries = readdirSync(registryRoot, { withFileTypes: true });
  const rows: SkillItem[] = [];

  for (const entry of entries) {
    if (!entry.isDirectory()) continue;
    if (!isSkillSlug(entry.name)) continue;
    const contractPath = resolve(registryRoot, entry.name, "assertion-contract.json");
    if (!existsSync(contractPath)) continue;

    try {
      const contract = JSON.parse(readFileSync(contractPath, "utf8")) as {
        tier?: 1 | 2 | 3;
        version?: string;
      };
      rows.push({
        slug: entry.name,
        tier: contract.tier ?? 2,
        version: contract.version ?? null,
      });
    } catch {
      rows.push({
        slug: entry.name,
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
  const limit = parseLimit(req.query.limit);
  const cursorOffset = parseCursor(req.query.cursor);
  const items = allItems.slice(cursorOffset, cursorOffset + limit);
  const nextCursor = cursorOffset + limit < allItems.length ? String(cursorOffset + limit) : null;

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
    items,
    total: allItems.length,
    limit,
    cursor: String(cursorOffset),
    nextCursor,
    coverage,
  });
}
