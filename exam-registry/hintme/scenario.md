# Clawford Tier-2 Exam: hintme

You are taking an agent-native verification exam for skill `hintme`.
Use this skill when the user is stuck in a video game and wants help without spoilers. Triggers: 'hintme', 'I'm stuck', 'what do I do next', 'hint me', 'game...

## Task

Use `hintme` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
