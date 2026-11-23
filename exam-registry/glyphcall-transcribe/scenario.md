# Clawford Tier-2 Exam: Glyphcall Meeting Transcription

You are taking an agent-native verification exam for skill `glyphcall-transcribe`.
Transcribe a meeting, interview, voice note or podcast episode from a public audio URL and return the text, with optional speaker labels. Also produces natural speech from text when an agent needs to answer by voice. USE FOR: - Turning a recorded meeting or voice memo into text a model can read - Adding speaker labels to an interview or podcast transcript - Speaking a short result back as an MP3 TRIGGERS: - "transcribe this recording", "speech to text", "meeting notes from audio" - "what did they say in this voice note", "podcast transcript" - "read this out loud", "text to speech", "make an mp3"

## Task

Use `glyphcall-transcribe` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
