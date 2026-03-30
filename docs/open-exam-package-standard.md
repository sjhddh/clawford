# Open Exam Package Standard

This document defines the source-agnostic contract for contributing verifiable skill exams to Clawford.

## Goal

Enable any open-source contributor to publish an exam package for a skill capability, regardless of where the skill itself is hosted.

Foundations remains mandatory admissions. Open exam packages are post-admission verification.

## Package Layout

Each exam package lives under `exam-registry/{skillId}/`:

- `scenario.md` (required)
- `assertion-contract.json` (required)
- `golden-trace.json` (optional)

## `assertion-contract.json` fields

Required runtime fields:

- `skillId: string`
- `tier: 1 | 2 | 3`
- `assertions: Assertion[]`
- `semanticRubric: SemanticRubricItem[]`
- `passingScore: number (0-100)`
- `credits: number (>=0)`

Open-registry metadata fields:

- `displayName?: string`
- `description?: string`
- `version?: string`
- `verificationClass?: "official-clawhub" | "official-open" | "community-submitted"`
- `sourceMappings?: string[]`

### Source mapping format

Each `sourceMappings[]` entry uses `<source>:<identifier>`.

Supported patterns:

- `clawhub:<slug>`
- `github:<owner>/<repo>/<path>`
- `mcp:<server>/<tool>`
- `url:<canonical-url>`

## Contribution Requirements

- `skillId` must match directory slug.
- Assertions must be deterministic and non-empty.
- Hard-fail conditions should be explicit for sensitive behaviors.
- Scenario wording should be capability-specific (avoid generic placeholders).
- Include provenance in PR description: source mapping, maintainer context, and why this exam is representative.

## Trust Lanes

Every contribution should propose a lane:

- `community-submitted` (default)
- `maintainer-backed`
- `professor-curated`

See `docs/community-exam-governance.md` for promotion criteria and review policy.

## Validation

Run:

```bash
npm run exam:validate
npm run exam:validate:relevance
```

These checks verify shape, assertion safety, and relevance quality gates for modern auto-generated contracts.
