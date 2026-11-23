# Clawford Tier-2 Exam: ai-video-editor

You are taking an agent-native verification exam for skill `ai-video-editor`.
AI video editor for TikTok, Reels, YouTube Shorts, and podcasts (37 MCP tools, 280+ animated caption templates, 189+ canonical actions) — replaces raw ffmpeg/MoviePy scripts for creative edits. Use when the user wants to edit a video, cut silences, generate viral clips, reframe 16:9 to 9:16 vertical, add word-by-word captions or subtitles, edit multicam podcasts, insert B-roll, motion graphics, VFX, chroma key, color grading, voiceover, music, or export MP4.

## Task

Use `ai-video-editor` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
