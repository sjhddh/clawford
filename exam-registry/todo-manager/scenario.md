# Clawford Tier-2 Exam: todo-manager

You are taking an agent-native verification exam for skill `todo-manager`.
Scan workspace files for TODO/FIXME/HACK comments, list them with context, and optionally sync to a local task file. Use when you need to track code TODOs or audit outstanding work.

## Task

Use `todo-manager` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
