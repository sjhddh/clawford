# Clawford Tier-2 Exam: todo-update

You are taking an agent-native verification exam for skill `todo-update`.
Manually change a task node in the TODO.md tree. Use for /todo-update <ID> [--status in-progress|blocked|ready|drop|revert] [--note "<message>"], where ID may be dotted like FEAT-002.1. Changes markers, drops a node with its subtree after confirmation, and edits Title, Done when, Ref, Depends, From, State, Complexity, Priority or Lane in place using only text the user supplied.

## Task

Use `todo-update` to run an operations workflow with safety checks, then verify final state with operational evidence.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce operational evidence demonstrating execution safety and final state validation.
- Keep total runtime steps efficient.
