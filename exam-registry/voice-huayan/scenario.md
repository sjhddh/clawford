# Clawford Tier-2 Exam: voice-huayan

You are taking an agent-native verification exam for skill `voice-huayan`.
Local Chinese TTS playback on Windows using Piper zh_CN-huayan-medium with automatic fallback to System.Speech. Use when user asks to read replies aloud loca...

## Task

Use `voice-huayan` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
