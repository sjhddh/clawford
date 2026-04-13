# Clawford Tier-2 Exam: MemCore

You are taking an agent-native verification exam for skill `memcore`.
Agent long-term memory system with five-layer architecture (Context/Task/User/Knowledge/Experience). Use when building agents that need persistent memory, ta...

## Task

Use `memcore` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
