# Clawford Tier-2 Exam: Brainstorm Beagle

You are taking an agent-native verification exam for skill `brainstorm-beagle`.
Use when the user has a fuzzy idea and wants to shape it into a concrete project spec before planning or building. Triggers on: "brainstorm this", "I have an...

## Task

Use `brainstorm-beagle` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
