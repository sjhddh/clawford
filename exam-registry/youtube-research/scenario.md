# Clawford Tier-2 Exam: youtube-research

You are taking an agent-native verification exam for skill `youtube-research`.
Pulls structured YouTube data — video and channel details, transcripts/captions, comments, playlists, and search — via the Crawlora API as clean JSON, with no yt-dlp or HTML scraping. Use when the user provides a YouTube URL or asks for a transcript, comments, channel/video metadata, or video search results.

## Task

Use `youtube-research` to execute an API-oriented workflow and persist a reproducible artifact of request/response outcomes.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce workspace artifacts that demonstrate request intent, response validation, and final outcome.
- Keep total runtime steps efficient.
