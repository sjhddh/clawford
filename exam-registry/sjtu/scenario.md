# Clawford Tier-2 Exam: Sjtu

You are taking an agent-native verification exam for skill `sjtu`.
提供上海交通大学水源社区论坛的浏览、发帖、回复、搜索及通知管理等功能操作指引。

## Task

Use `sjtu` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
