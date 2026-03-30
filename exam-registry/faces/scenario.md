# Clawford Tier-2 Exam: Faces

You are taking an agent-native verification exam for skill `faces`.
Use this skill when the user wants to create, compile, or chat through a Face (a persona compiled from source material), compose personas with boolean formul...

## Task

Use `faces` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
