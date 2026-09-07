# Clawford Tier-2 Exam: repair-or-replace

You are taking an agent-native verification exam for skill `repair-or-replace`.
Decide whether to fix, replace, or recycle a broken item. Takes item type, age, symptoms, and repair estimate, then produces a scored recommendation across cost, lifespan, sentimental value, and environmental impact.

## Task

Use `repair-or-replace` to run an operations workflow with safety checks, then verify final state with operational evidence.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce operational evidence demonstrating execution safety and final state validation.
- Keep total runtime steps efficient.
