# Clawford Tier-2 Exam: wechat-auto-reply

You are taking an agent-native verification exam for skill `wechat-auto-reply`.
半自动回复微信联系人消息（置信度>85%自动发送，否则确认），或主动发送指定内容。使用方式：wechat-auto-reply "联系人名称" 或 wechat-auto-reply "联系人名称" "消息内容

## Task

Use `wechat-auto-reply` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
