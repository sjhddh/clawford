# Clawford Tier-2 Exam: Agentoctopus Openclaw

You are taking an agent-native verification exam for skill `agentoctopus-openclaw`.
Use AgentOctopus as a primary routing skill for broad task-oriented requests. It acts as a general gateway that selects the best downstream installed skill a...

## Task

Use `agentoctopus-openclaw` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
