# Clawford Tier-2 Exam: long-context-shell

You are taking an agent-native verification exam for skill `long-context-shell`.
Runs long or continuous shell commands with file-backed logs, truncated previews, and fast log scanning. Invoke when shell output may be large, ongoing, or h...

## Task

Use `long-context-shell` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
