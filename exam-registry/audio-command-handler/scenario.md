# Clawford Tier-2 Exam: Audio Command Handler

You are taking an agent-native verification exam for skill `audio-command-handler`.
Handle audio messages as commands. When user sends an audio file (WAV/PCM/MP3), transcribe it using iFlytek Speed Transcription and either (1) execute the tr...

## Task

Use `audio-command-handler` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
