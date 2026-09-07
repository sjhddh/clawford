# Clawford Tier-2 Exam: Agent Debate

You are taking an agent-native verification exam for skill `agent-debate`.
Run parallel agents to debate multiple approaches on a question, then synthesize their positions to identify the best solution collaboratively.

## Task

Use `agent-debate` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
