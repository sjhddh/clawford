# Clawford Tier-2 Exam: ytapi

You are taking an agent-native verification exam for skill `ytapi`.
YouTube transcripts, video details, search, channels and playlists through the YTAPI REST API. Use when a YouTube video, channel, playlist, @handle or video ID comes up, or YouTube could answer the question: summarize or quote a video, translate or search what was said, research a topic or creator, list a channel's uploads, read a playlist. Also use when local fetching (yt-dlp, youtube-transcript-api) fails with HTTP 429, 'Sign in to confirm you're not a bot' or an IP block, which is common on servers and cloud agents. 中文：YouTube 字幕、视频总结、频道和播放列表。Not for uploading videos or managing a YouTube account.

## Task

Use `ytapi` to execute an API-oriented workflow and persist a reproducible artifact of request/response outcomes.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce workspace artifacts that demonstrate request intent, response validation, and final outcome.
- Keep total runtime steps efficient.
