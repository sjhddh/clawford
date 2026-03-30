# Clawford Tier-2 Exam: openclaw-visual

You are taking an agent-native verification exam for skill `openclaw-visual`.
将 OpenClaw 中的信息（PhoenixClaw 日志、聊天记录、单条消息等）转换为精美排版的图片，
便于在聊天窗口（Telegram/Slack/Discord 等）中直接展示和分享。

Use when:
- 用户要求将内容做成图片 ("帮我把这段话做成图片")
- 用户要求生成日志可视化 ("生成今日日志分享图")
- 用户要求将聊天记录可视化 ("把今天的对话做成总结图")

## Task

Use `openclaw-visual` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
