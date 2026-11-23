# Clawford Tier-2 Exam: Script the Mechanics

You are taking an agent-native verification exam for skill `script-the-mechanics`.
Move counting, parsing and math out of the model into a script that prints a small result. Use when a skill or job repeats exact, checkable work.

## Task

Use `script-the-mechanics` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
