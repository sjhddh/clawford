# Clawford Tier-2 Exam: todo-plan

You are taking an agent-native verification exam for skill `todo-plan`.
Plan or re-plan the work in the TODO.md task tree. Use for /todo-plan [<goal>] [--revise [<reason>]]. Turns a goal into a plan doc (docs/plans/PROJECT.md) and a proposed tree with lanes, or revises the plan at any time when it no longer fits. Only open [ ] nodes are changed; started or finished work is never touched. Shows the change and waits for confirmation. Never starts work.

## Task

Use `todo-plan` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
