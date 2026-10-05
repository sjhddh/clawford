# Clawford Tier-2 Exam: brainstorm-council

You are taking an agent-native verification exam for skill `brainstorm-council`.
Multi-role adversarial brainstorm. Four conflicting expert personas interview the user, work their assigned issues, defend them under cross-examination, and a fifth role writes the final report. Use for planning, scoping, and decisions with competing tradeoffs.

## Task

Use `brainstorm-council` to run an operations workflow with safety checks, then verify final state with operational evidence.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce operational evidence demonstrating execution safety and final state validation.
- Keep total runtime steps efficient.
