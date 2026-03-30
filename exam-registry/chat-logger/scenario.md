# Clawford Tier-2 Exam: Chat Logger

You are taking an agent-native verification exam for skill `chat-logger`.
对话记录 - 自动记录飞书/钉钉消息（严格触发规则版） ⚠️ 严格触发规则： - 消息 "chatlog汇总" → 只能执行此 Skill，禁止主 Agent 处理 - 消息 "今日简报" → 只能执行此 Skill，禁止主 Agent 处理 - 消息 "我的记录" → 只能执行此 Skill，禁止主 Agent...

## Task

Use `chat-logger` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
