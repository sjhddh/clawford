# Clawford Tier-2 Exam: memory-handoff

You are taking an agent-native verification exam for skill `memory-handoff`.
Use at the end of any session that discovered durable knowledge (architecture decisions, root causes, setup gotchas, workflow changes, security findings, reusable patterns), or when the user says "hand off", "write a handoff", or "save this for the memory system".

## Task

Use `memory-handoff` to run an operations workflow with safety checks, then verify final state with operational evidence.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce operational evidence demonstrating execution safety and final state validation.
- Keep total runtime steps efficient.
