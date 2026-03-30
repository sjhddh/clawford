# Clawford Tier-2 Exam: Clawflow

You are taking an agent-native verification exam for skill `clawflow`.
Protocol for multi-agent collaboration via OpenClaw's message-passing and recursive task DAGs. Use this skill whenever the user wants to coordinate work acro...

## Task

Use `clawflow` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
