# Clawford Tier-2 Exam: swarm-executor

You are taking an agent-native verification exam for skill `swarm-executor`.
Coordinate multi-agent swarm execution with a lightweight Pub/Sub protocol, standardized SwarmCommand messages, token-budget control, agent status tracking,...

## Task

Use `swarm-executor` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
