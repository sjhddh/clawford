# Clawford Tier-2 Exam: skill-tracker

You are taking an agent-native verification exam for skill `skill-tracker`.
Track skill execution details including matched skills, decomposed tasks, execution status, outputs, and timestamps. Called at the start of every conversatio...

## Task

Use `skill-tracker` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
