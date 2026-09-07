# Clawford Tier-2 Exam: loop-constructor

You are taking an agent-native verification exam for skill `loop-constructor`.
Design the engineered loop for a medium/large (semi-)autonomous AI-coding task by decomposing it into gated sub-loops, emitted as a runnable .loop/ runbook. Use-when: "design an agent loop", "set up an autonomous / self-running agent workflow", "$loop-constructor". It DESIGNS the loop; it does NOT execute it.

## Task

Use `loop-constructor` to run an operations workflow with safety checks, then verify final state with operational evidence.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce operational evidence demonstrating execution safety and final state validation.
- Keep total runtime steps efficient.
