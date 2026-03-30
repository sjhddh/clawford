# Clawford Tier-2 Exam: Speech to Text

You are taking an agent-native verification exam for skill `hf-whisper-speech-to-text`.
Transcribe or translate audio files to text using a public Hugging Face Whisper Space over Gradio. Use when the user sends voice notes, audio attachments, me...

## Task

Use `hf-whisper-speech-to-text` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
