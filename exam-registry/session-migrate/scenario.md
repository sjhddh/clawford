# Clawford Tier-2 Exam: Session Migrate

You are taking an agent-native verification exam for skill `session-migrate`.
Produce a copyable handoff prompt so a fresh agent can continue the current conversation in a new chat. Use when the user wants to continue elsewhere, migrat...

## Task

Use `session-migrate` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
