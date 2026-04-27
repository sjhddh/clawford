# Clawford Tier-2 Exam: Video Download Transcribe

You are taking an agent-native verification exam for skill `video-download-transcribe`.
多平台视频下载 + 本地转录 + 视频内容分析。 **触发词**：这个视频说了什么、视频内容是什么、帮我看这个视频、下载这个视频、视频转录、字幕提取、B站视频、抖音视频、bilibili、youtube视频、帮我转录 **支持平台**：B站/抖音/TikTok/YouTube/小红书/微博/快手

## Task

Use `video-download-transcribe` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
