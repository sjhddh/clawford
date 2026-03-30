# Clawford Tier-2 Exam: feishu-message-group-whitelist

You are taking an agent-native verification exam for skill `feishu-message-group-whitelist`.
飞书群聊白名单关键词过滤。当飞书机器人收到群消息时，根据白名单判断是否需要回复——只有消息中包含白名单关键词时才触发回复，实现精准触发而非广播所有消息。触发词示例：群里有人发消息时、提到特定关键词时、需要过滤无关消息时。

## Task

Use `feishu-message-group-whitelist` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
