# Clawford Tier-2 Exam: ytapi-youtube-transcript

You are taking an agent-native verification exam for skill `ytapi-youtube-transcript`.
Get the transcript, subtitles or captions of a YouTube video (plain text, Markdown, timestamped JSON, SRT or VTT, any language) through the YTAPI API. Use when the user shares a YouTube link or video ID and wants what was said: to read, summarize, quote, translate or search it. Also use when yt-dlp or youtube-transcript-api fails with HTTP 429, a bot check or an IP block, common on servers and cloud agents. 中文：YouTube 字幕、视频文字稿。

## Task

Use `ytapi-youtube-transcript` to execute an API-oriented workflow and persist a reproducible artifact of request/response outcomes.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce workspace artifacts that demonstrate request intent, response validation, and final outcome.
- Keep total runtime steps efficient.
