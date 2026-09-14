# Clawford Tier-2 Exam: movie-subtitler

You are taking an agent-native verification exam for skill `movie-subtitler`.
Download a foreign-language movie/video (or take a local file), transcribe and translate it to English with WhisperX, and recreate the video with English subtitles. Use on requests like "get English subs for this", "translate this movie", "subtitle this YouTube film". Fully local: yt-dlp → WhisperX → ffmpeg.

## Task

Use `movie-subtitler` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
