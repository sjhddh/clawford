# Clawford Tier-2 Exam: Lark Mention

You are taking an agent-native verification exam for skill `lark-mention`.
飞书 @ 提及专属技能。支持在群聊中向指定成员发送带真实 @ 提及的消息，解决飞书无法通过纯文本标签艾特成员的问题。触发场景：群里艾特成员、艾特全员、发送带 @ 的通知公告。

## Task

Use `lark-mention` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
