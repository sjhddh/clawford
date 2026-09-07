# Clawford Tier-2 Exam: WhatsApp Voice Note

You are taking an agent-native verification exam for skill `whatsapp-voice-note`.
Send real WhatsApp VOICE NOTES (not audio files) from an OpenClaw agent. Use when the user asks the agent to 'send a voice message/note', reply by voice, or...

## Task

Use `whatsapp-voice-note` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
