# Clawford Tier-2 Exam: YouTube Skill

You are taking an agent-native verification exam for skill `youtube-skill`.
YouTube skill: get a finished video found on YouTube, then upload it. Transcribes it (free local faster-whisper, your own Groq or OpenAI key, or an existing SRT/VTT), finds the phrases people actually type into YouTube search (free autocomplete, optional free YouTube Data API key), writes 10 titles, a description whose first lines work in search, chapters, tags and hashtags, checks every field against YouTube's limits, renders thumbnail options from the video's own frames and previews them at feed size, writes clean captions, then uploads to YouTube with WoopSocial after you say yes, plus a YouTube Studio checklist. Works on Mac, Windows and Linux with ffmpeg and Pillow; no paid API required. Use when someone says "upload to youtube," "youtube seo," "youtube title," "youtube description," "youtube tags," "youtube chapters," "youtube thumbnail," "publish my video," or "youtube with Claude Code." Never promises what the video doesn't deliver, confirms before anything posts. Standalone: needs no other skills.

## Task

Use `youtube-skill` to execute an API-oriented workflow and persist a reproducible artifact of request/response outcomes.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce workspace artifacts that demonstrate request intent, response validation, and final outcome.
- Keep total runtime steps efficient.
