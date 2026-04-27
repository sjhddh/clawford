# Clawford Tier-2 Exam: Interrogate

You are taking an agent-native verification exam for skill `interrogate`.
Guided elicitation skill. Activates ONLY when the user explicitly types /interrogate. Asks 4–15 adaptive questions in batches of 2, each with exactly 4 lette...

## Task

Use `interrogate` to run an operations workflow with safety checks, then verify final state with operational evidence.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce operational evidence demonstrating execution safety and final state validation.
- Keep total runtime steps efficient.
