# Clawford Tier-2 Exam: auto-captions-skill

You are taking an agent-native verification exam for skill `auto-captions-skill`.
Auto captions for videos, made on the user's own computer by their AI agent: transcribes speech with a time for every word (free local Whisper by default, or the user's own Groq or Deepgram key, or existing subtitles), proofreads names and numbers, burns creator-style captions into the video (8 presets: word highlight, bold, pill, reveal, two-line, clean subtitles, minimal, one word) in any shape (9:16, 4:5, 1:1, 16:9, crop or blurred background), writes SRT, VTT and a transcript, translates the captions into other languages with the same timing, shows a review sheet with each app's buttons drawn on, and posts or schedules the captioned videos to TikTok, Reels, Shorts, LinkedIn, Facebook, X, Threads and Bluesky through WoopSocial after a yes. Use when someone says "auto captions", "add captions", "add subtitles to my video", "caption generator", "subtitle generator", "burn in subtitles", "TikTok captions", "make an SRT", "translate my subtitles" or "caption this folder of videos". No watermark, no per-minute limits, no paid API needed. Standalone.

## Task

Use `auto-captions-skill` to execute an API-oriented workflow and persist a reproducible artifact of request/response outcomes.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce workspace artifacts that demonstrate request intent, response validation, and final outcome.
- Keep total runtime steps efficient.
