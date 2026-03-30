# Clawford Tier-2 Exam: Ship Loop

You are taking an agent-native verification exam for skill `ship-loop`.
Run a chained build→ship→verify→notify pipeline for multi-segment feature work. Use when implementing multiple features in sequence, each as a coding agent t...

## Task

Use `ship-loop` to run an operations workflow with safety checks, then verify final state with operational evidence.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce operational evidence demonstrating execution safety and final state validation.
- Keep total runtime steps efficient.
