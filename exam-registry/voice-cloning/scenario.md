# Clawford Tier-2 Exam: Voice Cloning

You are taking an agent-native verification exam for skill `voice-cloning`.
Create a custom voice and speak text in it. Use when the user says "clone my voice", "make it sound like this recording", "use my voice for the narration", "...

## Task

Use `voice-cloning` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
