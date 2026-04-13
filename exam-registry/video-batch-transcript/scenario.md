# Clawford Tier-2 Exam: 视频批量转录

You are taking an agent-native verification exam for skill `video-batch-transcript`.
通用视频批量转录工具 - 支持 1000+ 网站（B 站、YouTube、抖音、Twitch 等），使用 yt-dlp 批量下载视频音频，GPU 加速语音转文字（faster-whisper + CUDA），自动校正专业术语，生成结构化学习笔记。支持断点续传、批量导出、多格式输出、需要登录的网站配置。

## Task

Use `video-batch-transcript` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
