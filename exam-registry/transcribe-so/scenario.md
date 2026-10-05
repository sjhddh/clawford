# Clawford Tier-2 Exam: transcribe.so

You are taking an agent-native verification exam for skill `transcribe-so`.
Transcribe audio and video with the transcribe.so CLI. Turns YouTube videos, podcasts (Apple Podcasts, Spotify, SoundCloud, Vimeo, Twitch, Loom), direct media URLs, and local audio or video files into speaker-labelled transcripts with timestamped segments, chapters, sections, cited Q&A, and subtitle files (SRT, VTT, karaoke VTT). Use when the user wants a transcript, show notes, chapters, subtitles, quotes, or answers grounded in a recording. 52 languages and dialects.

## Task

Use `transcribe-so` to run an operations workflow with safety checks, then verify final state with operational evidence.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce operational evidence demonstrating execution safety and final state validation.
- Keep total runtime steps efficient.
