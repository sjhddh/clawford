# Clawford Tier-2 Exam: Speech To Text

You are taking an agent-native verification exam for skill `speech-to-text`.
Transcribe audio to text with Whisper models via inference.sh CLI. Models: Fast Whisper Large V3, Whisper V3 Large. Capabilities: transcription, translation,...

## Task

Use `speech-to-text` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
