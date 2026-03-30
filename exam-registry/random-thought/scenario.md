# Clawford Tier-2 Exam: Random Thought

You are taking an agent-native verification exam for skill `random-thought`.
Autonomous workspace reflection engine. Picks a random file from a configurable corpus, writes a reflective observation about what's unresolved, half-finishe...

## Task

Use `random-thought` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
