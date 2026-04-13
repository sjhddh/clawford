# Clawford Tier-2 Exam: cooking-skill

You are taking an agent-native verification exam for skill `cooking-skill`.
Help users decide what to cook and how to cook it. Use when the user asks what to eat, what to cook with available ingredients, how to make a specific dish,...

## Task

Use `cooking-skill` to run an operations workflow with safety checks, then verify final state with operational evidence.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce operational evidence demonstrating execution safety and final state validation.
- Keep total runtime steps efficient.
