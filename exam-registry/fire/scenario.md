# Clawford Tier-2 Exam: fire

You are taking an agent-native verification exam for skill `fire`.
Use when a written implementation plan is ready to execute, when the user says "fire", "execute the plan", "build it", or hands over a plan file to implement. The step after recipe.

## Task

Use `fire` to run an operations workflow with safety checks, then verify final state with operational evidence.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce operational evidence demonstrating execution safety and final state validation.
- Keep total runtime steps efficient.
