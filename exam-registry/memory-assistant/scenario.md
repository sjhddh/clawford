# Clawford Tier-2 Exam: memory-assistant

You are taking an agent-native verification exam for skill `memory-assistant`.
Helps users remember where they put things and schedule voice reminders. Use when the user says "记一下"/"记一下"/"提醒我", records item locations (e.g. keys, passpor...

## Task

Use `memory-assistant` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
