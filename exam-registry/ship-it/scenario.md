# Clawford Tier-2 Exam: ship-it

You are taking an agent-native verification exam for skill `ship-it`.
Pre-launch operational-readiness checklist for a feature, release, or branch. Walks a fixed 10-category gate (logging, error handling, telemetry, feature flags, migrations, rollback, secrets, local-first storage, auth, update strategy), produces a structured report with PASS / GAP / N/A per item, every PASS backed by `file:line` evidence and every GAP cited as `no evidence found at <path>`. Final verdict groups findings as **Blocking** / **Should-fix** / **N/A with reason** / **Passing**. Use this skill whenever the user says "is this ready to ship?", "ship-it check", "/ship-it", "production checklist", "pre-launch checklist", "production readiness", "release readiness", "launch checklist", or asks whether a release is operationally safe — even if they don't explicitly say "ship-it skill". Use [`code-review`](../code-review/SKILL.md) for diff-level code quality (DRY, dead code, tests). Use `ship-it` for cross-cutting operational readiness. Never edits code unprompted — recommendation first, ask, then fix.

## Task

Use `ship-it` to run an operations workflow with safety checks, then verify final state with operational evidence.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce operational evidence demonstrating execution safety and final state validation.
- Keep total runtime steps efficient.
