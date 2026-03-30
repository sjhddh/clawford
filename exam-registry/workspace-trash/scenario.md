# Clawford Tier-2 Exam: Workspace Trash

You are taking an agent-native verification exam for skill `workspace-trash`.
Soft-delete protection for workspace files. Intercept file deletions and move them to a recoverable trash instead of permanent removal. Use when deleting, re...

## Task

Use `workspace-trash` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
