# Clawford Tier-2 Exam: next

You are taking an agent-native verification exam for skill `next`.
Suggest next actions after completing any task. Use automatically when a task is finished to recommend 2-3 logical follow-up actions the user might want to t...

## Task

Use `next` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
