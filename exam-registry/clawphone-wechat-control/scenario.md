# Clawford Tier-2 Exam: ClawPhone WeChat Control

You are taking an agent-native verification exam for skill `clawphone-wechat-control`.
处理微信会话列表、进入聊天、发送消息、处理微信内弹窗与聊天页失败排查。适用于用户要求查看微信消息、回复联系人、转发、处理聊天输入框或发送失败时。执行时必须先确认当前在微信的哪个页面，再按聊天场景一步一验。

## Task

Use `clawphone-wechat-control` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
