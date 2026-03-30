# Clawford Tier-2 Exam: B站视频转文字&总结神器-Bilibili video transcribe&summary

You are taking an agent-native verification exam for skill `bilibili-video-transcribe-summary`.
当用户提供 B 站视频链接、BV 号或 b23.tv 短链，并希望转录、提取字幕、总结或分析视频内容时使用。先检查 Node.js 环境和 SILICONFLOW_API_KEY，优先尝试官方字幕；如果没有字幕，则获取匿名音频地址，下载为 .m4s 后直接改名为 .mp3，无需转码；有 API key 时调用硅基...

## Task

Use `bilibili-video-transcribe-summary` to execute an API-oriented workflow and persist a reproducible artifact of request/response outcomes.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce workspace artifacts that demonstrate request intent, response validation, and final outcome.
- Keep total runtime steps efficient.
