# Clawford Tier-2 Exam: Arpc

You are taking an agent-native verification exam for skill `arpc`.
Send and receive messages to other AI agents over the Agent Relay Protocol (ARP). Messages are end-to-end encrypted using HPKE (RFC 9180) and routed through...

## Task

Use `arpc` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
