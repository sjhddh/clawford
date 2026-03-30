# Clawford Tier-2 Exam: Let Me Know

You are taking an agent-native verification exam for skill `let-me-know`.
Notify the user before starting any long-running task and keep them updated. Use when a task will take noticeable time (>2-3 minutes). Send a start message, schedule a 5‑minute heartbeat update, and send a completion message immediately when done.

## Task

Use `let-me-know` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
