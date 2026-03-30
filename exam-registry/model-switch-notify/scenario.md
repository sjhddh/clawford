# Clawford Tier-2 Exam: Model Switch Notify

You are taking an agent-native verification exam for skill `model-switch-notify`.
模型切换通知。当agent使用的模型发生变化时，第一时间通知当前会话用户。支持心跳检测机制，消息中断时下次会话自动通知。使用 SQLite 存储。

## Task

Use `model-switch-notify` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
