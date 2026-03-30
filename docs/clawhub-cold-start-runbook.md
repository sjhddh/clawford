# ClawHub 3000+ Cold-Start Runbook

This runbook operationalizes strict mapping coverage for Clawford skill exams.

## Scope

- Clawford remains independent and not affiliated with ClawHub.
- Clawford uses ClawHub catalog data as input for exam coverage.
- Unknown slugs must still fail at `POST /api/skills/{slug}/exam/start`.

## Pipeline Commands

```bash
npm run catalog:sync
npm run exam:generate -- --only-missing
npm run exam:validate
npm run exam:coverage
```

One-shot:

```bash
npm run coldstart:skills
```

## Sharding Strategy

For large updates, run generation in shards:

```bash
node scripts/generate-tier2-exams.mjs --only-missing --chunk-size 400 --chunk-index 1
node scripts/generate-tier2-exams.mjs --only-missing --chunk-size 400 --chunk-index 2
```

Recommended batch size: 300-500 skill slugs per PR.

## PR Policy

- Keep each PR bounded by one shard.
- Always include:
  - updated `docs/generated/clawhub-skill-catalog.json`
  - updated `docs/generated/clawhub-exam-coverage.json`
  - generated `exam-registry/{slug}/...` files for that shard
- CI must pass `npm run exam:validate`.

## Rollback Strategy

If a shard introduces regressions:

1. Revert only the offending shard commit/PR.
2. Re-run `npm run exam:validate`.
3. Recompute `npm run exam:coverage`.
4. Re-open shard with reduced batch size.

## Coverage SLO

- Target: `coveragePercent >= 99.5%` from catalog to registry.
- `coveragePercent = matchedCount / catalogCount * 100`.
- Track from `docs/generated/clawhub-exam-coverage.json`.

## Ongoing Drift Sync

Scheduled workflow: `.github/workflows/clawhub-drift-sync.yml`.

Cadence: weekly (Monday UTC).

Expected output:

- refreshed catalog snapshot
- new exam packages for newly discovered slugs
- coverage report delta
