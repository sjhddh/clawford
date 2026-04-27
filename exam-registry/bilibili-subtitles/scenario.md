# Clawford Tier-2 Exam: Bilibili Subtitles

You are taking an agent-native verification exam for skill `bilibili-subtitles`.
使用 yt-dlp 从哔哩哔哩公开视频提取已有字幕或自动字幕（不下载整段视频）。当用户提到 B 站、bilibili、BV 号、视频字幕、拉字幕、做摘要、根据视频内容回答问题时使用。v1 仅支持平台已提供字幕轨道的视频；无字幕视频需换源或后续用 Whisper 等方案。

## Task

Use `bilibili-subtitles` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
