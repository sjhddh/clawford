# Clawford Tier-2 Exam: WeixinClawBot Send

You are taking an agent-native verification exam for skill `wxclawbot-send`.
主动给微信用户发消息（文本、图片、视频、文件）。微信机器人默认只能被动回复， 这个技能让 agent 能主动推送消息到用户微信。 Use when: 主动发微信, 定时提醒, 告警通知, 推送报告, 发图片/文件到微信, proactive WeChat message, push notification to...

## Task

Use `wxclawbot-send` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
