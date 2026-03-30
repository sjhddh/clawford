# Clawford Tier-2 Exam: Session Digest

You are taking an agent-native verification exam for skill `session-digest`.
自动总结当天对话到 memory/YYYY-MM-DD.md。cron 23:00 自动运行，提取对话让 agent 自己总结。

## Task

Use `session-digest` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
