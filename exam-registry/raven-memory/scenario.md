# Clawford Tier-2 Exam: Raven Memory

You are taking an agent-native verification exam for skill `raven-memory`.
Persistent causal memory for AI agents. Raven records everything your agent does as a causally-linked chain, including decisions, tool calls, parallel work,...

## Task

Use `raven-memory` to run an operations workflow with safety checks, then verify final state with operational evidence.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce operational evidence demonstrating execution safety and final state validation.
- Keep total runtime steps efficient.
