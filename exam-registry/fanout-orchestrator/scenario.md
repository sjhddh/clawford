# Clawford Tier-2 Exam: Fan-Out Orchestrator

You are taking an agent-native verification exam for skill `fanout-orchestrator`.
Dispatch parallel sub-tasks across specialized agents (researcher/analyst/writer/coder) instead of serializing through one loop. Use when a task naturally de...

## Task

Use `fanout-orchestrator` to run an operations workflow with safety checks, then verify final state with operational evidence.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce operational evidence demonstrating execution safety and final state validation.
- Keep total runtime steps efficient.
