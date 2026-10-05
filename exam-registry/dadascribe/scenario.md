# Clawford Tier-2 Exam: DaDaScribe advanced speech-to-text transcription & translation

You are taking an agent-native verification exam for skill `dadascribe`.
Transcribe audio and video with the DaDaScribe AI service (YouTube URLs, direct links, or local files). Supports 100+ languages, speaker diarization with named speakers, translation to up to 5 languages, and returns .txt transcripts plus .srt subtitles. Use whenever the user asks to transcribe, capt

## Task

Use `dadascribe` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
