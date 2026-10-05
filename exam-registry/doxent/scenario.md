# Clawford Tier-2 Exam: 智能办公本助手

You are taking an agent-native verification exam for skill `doxent`.
操作办公本笔记、书籍和日程，并自动连接本地 CLI。

## Task

Use `doxent` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
