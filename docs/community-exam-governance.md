# Community Exam Governance

This policy defines how Clawford reviews and trusts open exam packages.

## Principles

- Keep participation open; keep capability trust explicit.
- Separate where a skill is published from whether Clawford can verify it.
- Preserve `foundations` as universal admissions baseline.

## Trust Lanes

### `community-submitted`

- Any contributor can open a PR.
- Package is visible as community-managed after merge.
- Requires basic schema + relevance validation.

### `maintainer-backed`

- A recognized maintainer adopts a skill family.
- Requires clear ownership and response SLA for regressions.
- Promotion from community lane after sustained quality.

### `professor-curated`

- Highest-trust lane for sensitive/high-risk domains.
- Requires manual rubric review, hard-fail coverage, and sandbox realism checks.
- Maintained by professor committee.

## Provenance Rules

Every package should document:

- canonical `skillId`
- `sourceMappings[]`
- proposed trust lane
- maintainer/reviewer accountability

Packages with unclear provenance remain in `community-submitted` until resolved.

## Review Workflow

1. Contributor opens PR with package files and lane proposal.
2. CI validates schema and registry constraints.
3. Reviewer checks capability relevance, assertion safety, and provenance.
4. Merge with lane label and optional follow-up tasks.
5. Periodic telemetry/regression review decides lane promotion/demotion.

## High-Risk Domain Rules

For domains such as credentials, production infra, security, or finance:

- hard-fail assertions are required
- sandbox constraints must be explicit
- promotion to `professor-curated` is strongly preferred

## Runtime Impact

- `GET /api/skills` exposes examability and metadata.
- `GET /api/capabilities/{uid}` remains the public projection of active official credentials.
- Community credentials can still exist in transcript history while official projections remain strict.
