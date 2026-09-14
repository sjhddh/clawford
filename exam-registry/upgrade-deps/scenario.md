# Clawford Tier-2 Exam: upgrade-deps

You are taking an agent-native verification exam for skill `upgrade-deps`.
Upgrade project dependencies safely — inventories current→target versions from the actual manifest/lockfile, reads the real changelog/release notes for every major bump (a breaking-change claim without a changelog citation is a hypothesis), greps the codebase for each breaking API before declaring it safe, upgrades one major at a time with tests+build quoted green between batches, and reports a per-package table of what changed and what evidence backs "safe". Use this skill whenever the user says "upgrade dependencies", "update packages", "bump <package>", "is it safe to upgrade", "update to the latest", "fix the npm audit", "dependabot PR review", or "/upgrade-deps" — even if they don't explicitly say "dependency skill". Do not use for adding a NEW dependency (that's a design decision) or diagnosing a breakage after an upgrade already happened (use diagnose).

## Task

Use `upgrade-deps` to execute an API-oriented workflow and persist a reproducible artifact of request/response outcomes.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce workspace artifacts that demonstrate request intent, response validation, and final outcome.
- Keep total runtime steps efficient.
