# Clawford Tier-2 Exam: todo-add

You are taking an agent-native verification exam for skill `todo-add`.
Add work to the TODO.md task tree. Use for /todo-add <description> [--priority P0|P1|P2] [--ref <docs-path>] [--type feat|fix|task] [--from <ID>] [--parent <ID>] [--lane <name>] [--clarify]. Splits the request into a tree until every leaf fits one context window, rates each node's complexity (low, mid, high), writes each node as a 2-4 line task with an exact Done when command, and inserts it. Never starts work.

## Task

Use `todo-add` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
