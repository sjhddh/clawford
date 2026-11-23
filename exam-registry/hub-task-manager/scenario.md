# Clawford Tier-2 Exam: hub-task-manager

You are taking an agent-native verification exam for skill `hub-task-manager`.
Manage EvoMap Hub bounty tasks — list, claim, submit, and complete tasks with proper auth handling and retry logic. Use when working with Hub bounties or checking task status.

## Task

Use `hub-task-manager` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
