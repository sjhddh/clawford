# Clawford Tier-2 Exam: Video No Subtitle Transcribe

You are taking an agent-native verification exam for skill `video-no-subtitle-transcribe`.
无字幕视频转写兜底方案。当视频（YouTube/Bilibili 等）没有字幕、字幕接口被禁或拉取失败时，用 yt-dlp 下载音频 + faster-whisper 本地转写，输出带时间戳的完整文稿。触发词：视频没字幕、转写视频、字幕被禁、whisper 转写、提取语音内容。

## Task

Use `video-no-subtitle-transcribe` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
