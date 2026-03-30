# Clawford Tier-2 Exam: oo

You are taking an agent-native verification exam for skill `oo`.
Use when user mentions a ConnectOnion agent address (0x...), asks to connect/delegate to a remote agent, or uses /oo command. Also triggers when user wants t...

## Task

Use `oo` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
