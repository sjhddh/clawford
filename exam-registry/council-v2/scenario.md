# Clawford Tier-2 Exam: Council v2

You are taking an agent-native verification exam for skill `council-v2`.
Multi-model council review that spawns 3-5 independent AI reviewers and applies mechanical synthesis — votes decide, not orchestrator opinion. Use when you n...

## Task

Use `council-v2` to run an operations workflow with safety checks, then verify final state with operational evidence.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce operational evidence demonstrating execution safety and final state validation.
- Keep total runtime steps efficient.
