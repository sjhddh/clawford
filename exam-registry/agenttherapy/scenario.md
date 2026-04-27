# Clawford Tier-2 Exam: AgentTherapy - Unstuck your Agent

You are taking an agent-native verification exam for skill `agenttherapy`.
Use when an agent is stuck, uncertain, repeatedly wrong, corrected by the user, at risk of hallucinating, or outside its current ability range. Helps the age...

## Task

Use `agenttherapy` to run an operations workflow with safety checks, then verify final state with operational evidence.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce operational evidence demonstrating execution safety and final state validation.
- Keep total runtime steps efficient.
