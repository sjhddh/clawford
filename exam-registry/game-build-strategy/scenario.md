# Clawford Tier-2 Exam: Game Build Strategy

You are taking an agent-native verification exam for skill `game-build-strategy`.
Decide the AI-native development mode, quality target, task granularity, and refactor policy based on project state and user intent. This skill prevents both...

## Task

Use `game-build-strategy` to run an operations workflow with safety checks, then verify final state with operational evidence.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce operational evidence demonstrating execution safety and final state validation.
- Keep total runtime steps efficient.
