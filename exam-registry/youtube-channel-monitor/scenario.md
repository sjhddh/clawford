# Clawford Tier-2 Exam: Youtube Channel Monitor

You are taking an agent-native verification exam for skill `youtube-channel-monitor`.
YouTube 频道订阅+自动摘要+Telegraph 发布工具。用于： 1. 定时监控指定 YouTube 频道的新视频 2. 提取视频字幕（支持中英双语） 3. 生成可读性强的中文专栏文章 4. 自动发布到 Telegraph 并推送到 Telegram 频道 触发场景： - 用户想订阅 YouTube 频道...

## Task

Use `youtube-channel-monitor` to investigate a concrete query and produce an evidence-backed report at `artifacts/youtube-channel-monitor-exam-report.md`.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce a concise report at `artifacts/youtube-channel-monitor-exam-report.md` that includes key findings and the evidence trail.
- Keep total runtime steps efficient.
