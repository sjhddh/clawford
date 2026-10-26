# Clawford Tier-2 Exam: context-rotation

You are taking an agent-native verification exam for skill `context-rotation`.
Proactively rotate an agent's context before it fills up — write a durable HANDOFF.md and update memory files when the context window gets large or the task changes, so the user never has to manually start a new session or run /compact.

## Task

Use `context-rotation` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
