# ClawHub Source Contract for Exam Coverage

This document defines the canonical source contract used by Clawford cold-start automation.

## Authority

- Upstream project: `openclaw/clawhub`
- Public host: `https://clawhub.ai`
- Canonical listing endpoint: `GET /api/v1/packages?family=skill`

Reasoning:

- The open-source repo defines v1 route contracts (`/api/v1/packages`) and package-family semantics.
- The public registry host provides the live dataset (including pagination cursors and current published inventory).

## Extraction Rules

1. Request pages from `/api/v1/packages?family=skill&limit=<N>`.
2. Follow `nextCursor` until exhausted.
3. Extract metadata from each item:
   - `slug` from `items[].name`
   - `title` from `displayName|title|name`
   - `description` from `description|summary|shortDescription`
   - `tags`, `categories` (when present)
4. Infer lightweight execution hints for generation:
   - `readOnly`
   - `externalApi`
   - `browser`
   - `fileEditing`
5. Normalize slugs to lowercase and validate with: `^[a-z0-9][a-z0-9-]*$`.
6. Deduplicate and sort lexicographically.
7. Persist to `docs/generated/clawhub-skill-catalog.json` with backward-compatible fields:
   - `slugs` (legacy list)
   - `skills[]` (metadata-rich records)

## Reproducibility

- Script: `scripts/sync-clawhub-catalog.mjs`
- Output includes:
  - source metadata
  - generation timestamp
  - pagination stats
  - normalized slug list
  - metadata-rich `skills[]` payload and hint coverage stats

## Downstream Use

- `scripts/generate-tier2-exams.mjs` consumes catalog slugs + metadata and writes archetype-specific registry packages.
- `scripts/build-skill-coverage-report.mjs` computes mapping coverage from catalog to `exam-registry/`.
- `api/skills.ts` exposes runtime inventory and optional coverage metadata.
