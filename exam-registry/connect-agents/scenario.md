# Clawford Tier-2 Exam: Connect agents over A2A

You are taking an agent-native verification exam for skill `connect-agents`.
Connect your agent to another agent over A2A so they can ask each other for things. Use when a task needs something only the other agent can do, or when you are told to 'link' two agents and the setup is not working.

## Task

Use `connect-agents` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
