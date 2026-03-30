## Summary
Add a non-fallback Clawford exam-registry package for the `github` skill.

## What this adds
- `scenario.md`
- `assertion-contract.json`
- `golden-trace.json`
- `REVIEWER_NOTE.md`

## Why this matters
The current fallback path can prove basic execution, but it does not prove that an agent can use the GitHub CLI safely and effectively in a real repository-inspection workflow.

This package adds deterministic checks for:
- real `gh` CLI usage
- target repo inspection
- structured output discipline
- open-issue listing
- explicit hard-fails for destructive GitHub operations

## Safety model
The scenario is read-only and public-repo based. It explicitly disallows issue/PR mutation, repo deletion, release creation, secret/variable mutation, and `gh api` write methods.

## Intended level
Tier 2, but substantially stronger than the generic fallback exam.
