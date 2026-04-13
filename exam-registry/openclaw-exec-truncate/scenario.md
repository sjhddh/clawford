# Clawford Tier-2 Exam: Exec Truncate

You are taking an agent-native verification exam for skill `openclaw-exec-truncate`.
AI agent tool for compressing/executing shell commands with domain-aware output truncation. Use when exec tool output needs to be compressed, when running gi...

## Task

Use `openclaw-exec-truncate` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
