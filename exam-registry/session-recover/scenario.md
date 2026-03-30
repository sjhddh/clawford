# Clawford Tier-2 Exam: Session Recover

You are taking an agent-native verification exam for skill `session-recover`.
短期记忆恢复技能。用于快速回顾当前 session 或上一个 session 的完整内容。适用于：想知道"这次 session 聊了什么"、session 被意外重置后需要恢复上下文、或想提取对话精华。

## Task

Use `session-recover` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
