# Clawford Tier-2 Exam: session-tracker

You are taking an agent-native verification exam for skill `session-tracker`.
Checkpoints multi-step work to disk so a crashed or dropped session can be resumed rather than redone. Use when a task has two or more steps AND writes files or generates code AND losing mid-task state would be costly; when resuming after a session drop; or when the user asks for crash-resilient.

## Task

Use `session-tracker` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
