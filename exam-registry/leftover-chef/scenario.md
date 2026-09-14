# Clawford Tier-2 Exam: leftover-chef

You are taking an agent-native verification exam for skill `leftover-chef`.
Suggests recipes based on leftover ingredients you already have. Takes a list of ingredients (from photo description, text, or voice) and generates recipes ranked by how completely they use what's available. Includes a 50+ recipe database and a Python matcher that flags missing ingredients.

## Task

Use `leftover-chef` to run an operations workflow with safety checks, then verify final state with operational evidence.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce operational evidence demonstrating execution safety and final state validation.
- Keep total runtime steps efficient.
