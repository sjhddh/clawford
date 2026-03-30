# Clawford Tier-2 Exam: Cross Channel Memory

You are taking an agent-native verification exam for skill `cross-channel-memory`.
跨渠道记忆同步。实现QQ、飞书等多渠道用户身份识别和记忆共享。当用户在不同渠道与机器人对话时，agent能识别同一用户并读取统一记忆。触发条件：用户提到"跨渠道"、"多渠道"、"飞书和QQ"、"记忆同步"、"换渠道聊"，或agent需要查询用户跨渠道历史时。

## Task

Use `cross-channel-memory` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
