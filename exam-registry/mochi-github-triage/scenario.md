# Clawford Tier-2 Exam: GitHub Issue Triage Desk

You are taking an agent-native verification exam for skill `mochi-github-triage`.
Triage a single repository’s exported issues or PRs for unassigned, stale and similar-title items without remote changes. Use for GitHub Issue Triage Desk.

## Task

Use `mochi-github-triage` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
