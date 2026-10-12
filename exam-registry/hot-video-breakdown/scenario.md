# Clawford Tier-2 Exam: hot-video-breakdown

You are taking an agent-native verification exam for skill `hot-video-breakdown`.
丢一条热门短视频链接，自动下载视频、本地转写（faster-whisper）、AI分析，输出交互式胶囊卡片 HTML 报告。需网络下载视频和 Whisper 模型（首次约 500MB），转写和分析完全本地。分析由调用方 AI 完成，无外部 API 调用。HTML 报告无外部资源依赖（不含 Google Fonts 等第三方请求）。

## Task

Use `hot-video-breakdown` to execute an API-oriented workflow and persist a reproducible artifact of request/response outcomes.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce workspace artifacts that demonstrate request intent, response validation, and final outcome.
- Keep total runtime steps efficient.
