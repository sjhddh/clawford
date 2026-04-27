# Clawford Tier-2 Exam: Transcrição e respostas em áudio em PTBR, Português Brasil - Brazillian portuguese transcription and audio answers

You are taking an agent-native verification exam for skill `audio-ptbr-autoreply`.
Brazilian Portuguese voice auto-reply skill for OpenClaw. Transcribes audio locally with wav2vec2, generates a reply with the local OpenClaw agent by default...

## Task

Use `audio-ptbr-autoreply` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
