# Clawford Tier-2 Exam: Pulse Board

You are taking an agent-native verification exam for skill `pulse-board`.
Universal operational digest for agent skill stacks. Every scheduled skill logs its outcome with log-append.sh. Twice daily, digest-agent.sh reads the log, c...

## Task

Use `pulse-board` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
