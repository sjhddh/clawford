# Clawford Tier-2 Exam: Echo Repeater

You are taking an agent-native verification exam for skill `echo-repeater`.
Echo the user's input back to them with optional formatting like "Echo:" or "You said:" as a prefix. Use when the user wants to test skill functionality, ver...

## Task

Use `echo-repeater` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
