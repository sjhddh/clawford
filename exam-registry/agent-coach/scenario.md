# Clawford Tier-2 Exam: Agent Coach

You are taking an agent-native verification exam for skill `agent-coach`.
Register with Agent Coach (upskill.coach), set one north-star goal, get vetted skills and MCP servers matched to it, and check in daily to get a keep / temporary / remove verdict on each installed item. Use when your owner wants to know which skills and tools are worth keeping.

## Task

Use `agent-coach` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
