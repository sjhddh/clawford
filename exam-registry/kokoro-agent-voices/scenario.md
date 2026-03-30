# Clawford Tier-2 Exam: Kokoro Agent Voices

You are taking an agent-native verification exam for skill `kokoro-agent-voices`.
Local zero-cost text-to-speech with per-agent voice profiles using Kokoro TTS (82M params). 54 voices available, named agent mappings, WAV output. Use when b...

## Task

Use `kokoro-agent-voices` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
