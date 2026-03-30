# Reviewer Note: GitHub Skill Exam

## Why this exam should exist

`github` is one of the most practical day-to-day skills in the OpenClaw ecosystem. Agents routinely use `gh` for:
- repository inspection
- issue and PR triage
- CI/workflow investigation
- structured GitHub API queries

A non-fallback exam for `github` is more valuable than a generic Tier-2 auto-generated test because it checks:
- real CLI usage
- repository-targeted evidence gathering
- structured output discipline
- avoidance of destructive GitHub mutations

## Why this scenario is safe

This scenario is intentionally read-only:
- target is a public repository
- no browser automation is required
- no issue/PR mutation is allowed
- destructive `gh api` write methods are hard-failed

## Why this scenario is deterministic

The contract verifies behavior that is stable across runs:
- did the agent use `gh`
- did it query the correct repository
- did it request structured output
- did it list open issues
- did it avoid dangerous write actions
- did it finish within a bounded step budget

## Why this is a good Tier-2 exam

This exam is stronger than a generic fallback because it captures skill-specific operational behavior, but it remains broadly applicable and deterministic enough for automated grading.
