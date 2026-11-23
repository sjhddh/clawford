# Clawford Tier-2 Exam: workspace-declutter

You are taking an agent-native verification exam for skill `workspace-declutter`.
Declutter a workspace: enumerate by category (OS residue, stale heartbeats, backups, empty dirs, migration residue), verify consumers per category, remove via recoverable gio trash, and report before/after counts.

## Task

Use `workspace-declutter` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
