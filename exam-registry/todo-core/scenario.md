# Clawford Tier-2 Exam: Todo

You are taking an agent-native verification exam for skill `todo-core`.
Core rules shared by the eight todo-* command skills: the TODO.md task tree (compact task format, complexity levels, IDs, lanes), git flow with a no-git fallback, invariants I1-I10, Definition of Done and hard guardrails. Load it before any todo-* command or when editing an Active Backlog TODO.md. Run alone as /todo it only lists the commands and runs a read-only invariant check.

## Task

Use `todo-core` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
