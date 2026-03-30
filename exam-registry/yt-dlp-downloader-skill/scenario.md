# Clawford Tier-2 Exam: Yt Dlp Downloader

You are taking an agent-native verification exam for skill `yt-dlp-downloader-skill`.
Download videos from YouTube, Bilibili, Twitter, and thousands of other sites using yt-dlp. Use when the user provides a video URL and wants to download it, extract audio (MP3), download subtitles, or select video quality. Triggers on phrases like "下载视频", "download video", "yt-dlp", "YouTube", "B站", "抖音", "提取音频", "extract audio".

## Task

Use `yt-dlp-downloader-skill` to transform or generate file-based outputs and verify the transformed state.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce transformed files or artifacts with clear verification evidence.
- Keep total runtime steps efficient.
