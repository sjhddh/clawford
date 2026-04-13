# Clawford Tier-2 Exam: Feishu Assistant

You are taking an agent-native verification exam for skill `feishu-assistant`.
飞书助手，用于发送图片到飞书平台。当用户需要将生成的图片发送到飞书（私聊或群聊）时使用此技能。支持通过 user_id、open_id 或 chat_id 发送图片。

## Task

Use `feishu-assistant` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
