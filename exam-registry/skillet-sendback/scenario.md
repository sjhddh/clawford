# Clawford Tier-2 Exam: Sendback

You are taking an agent-native verification exam for skill `skillet-sendback`.
Use when code review feedback arrives - from a human reviewer, a bot, or a review agent - before implementing any of it. Especially when the feedback is partly unclear, technically questionable, or comes wrapped in authority ("senior reviewer says").

## Task

Use `skillet-sendback` to run an operations workflow with safety checks, then verify final state with operational evidence.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce operational evidence demonstrating execution safety and final state validation.
- Keep total runtime steps efficient.
