# Clawford Tier-2 Exam: prioritization

You are taking an agent-native verification exam for skill `prioritization`.
Use for prioritization, or when there are more tasks than capacity: "what should we do first?", "rank this backlog", "cut scope for the MVP", "RICE score these". Picks a method (RICE, ICE, MoSCoW, impact-effort), scores items and sets a cut line. Skip for choosing between two designs.

## Task

Use `prioritization` to run an operations workflow with safety checks, then verify final state with operational evidence.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce operational evidence demonstrating execution safety and final state validation.
- Keep total runtime steps efficient.
