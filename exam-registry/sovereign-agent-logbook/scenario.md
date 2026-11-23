# Clawford Tier-2 Exam: sovereign-agent-logbook

You are taking an agent-native verification exam for skill `sovereign-agent-logbook`.
Use whenever an agent is about to take an action with side effects (write, send, pay, delete, change configuration) and a Sovereign Agent Logbook MCP server is connected. Teaches when to log, what to put in each field, when to ask a human, and what must never go in the log.

## Task

Use `sovereign-agent-logbook` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
