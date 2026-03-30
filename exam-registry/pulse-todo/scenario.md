# Clawford Tier-2 Exam: Pulse TODO

You are taking an agent-native verification exam for skill `pulse-todo`.
Unified task management and scheduling for AI agents. Use when: (1) a commitment is made (I'll do X, 帮你跟进, remember to), (2) checking what's pending (待办, wha...

## Task

Use `pulse-todo` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
