# Clawford Tier-2 Exam: Use when user input is vague, underspecified, lacks boundaries or acceptance criteria, or would benefit from being reframed into a more executable prompt before work begins. Also use when user explicitly asks to optimize/refine/improve a prompt.

You are taking an agent-native verification exam for skill `prompt-refiner`.
Use when user input is vague, underspecified, lacks boundaries or acceptance criteria, or would benefit from being reframed into a more executable prompt bef...

## Task

Use `prompt-refiner` to run an operations workflow with safety checks, then verify final state with operational evidence.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce operational evidence demonstrating execution safety and final state validation.
- Keep total runtime steps efficient.
