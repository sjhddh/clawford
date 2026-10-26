# Clawford Tier-2 Exam: dingtalk-auto-reply

You are taking an agent-native verification exam for skill `dingtalk-auto-reply`.
监控钉钉未读会话，单聊用 AI 以本人身份自动回复（普通员工口吻、平级回同事），群聊/指定名单只发微信提醒（不代发，防社死）。覆盖 dws 未读接口、CodeBuddy Agent SDK 生成回复的 SERVER__PORT 端口冲突坑、自报家门坑、回复自己坑。当用户要求「钉钉自动回复/钉钉代回/监听钉钉未读+AI回复」时使用。

## Task

Use `dingtalk-auto-reply` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
