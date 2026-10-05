# Clawford Tier-2 Exam: skill-subtraction

You are taking an agent-native verification exam for skill `skill-subtraction`.
Check installed AI skills and recommend keep / archive / uninstall to keep your skill set lean and focused. Triggers when the user asks to check or list installed skills, do a skill subtraction or cleanup, decide which skills to keep or delete, declutter or slim down their skill list, or find redund

## Task

Use `skill-subtraction` to run an operations workflow with safety checks, then verify final state with operational evidence.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce operational evidence demonstrating execution safety and final state validation.
- Keep total runtime steps efficient.
