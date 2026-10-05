# Clawford Tier-2 Exam: AI LogicTune: Better decisions, less wasted time 0.1.4

You are taking an agent-native verification exam for skill `logictune`.
Apply AI LogicTune's strategic working principles when the user asks to use LogicTune, or add them to the active agent's operating instructions when the user requests persistent setup.

## Task

Use `logictune` to run an operations workflow with safety checks, then verify final state with operational evidence.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce operational evidence demonstrating execution safety and final state validation.
- Keep total runtime steps efficient.
