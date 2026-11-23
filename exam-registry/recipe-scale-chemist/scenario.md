# Clawford Tier-2 Exam: recipe-scale-chemist

You are taking an agent-native verification exam for skill `recipe-scale-chemist`.
Use when scaling a recipe up or down, converting a recipe to a different pan size, or diagnosing why a doubled recipe tastes wrong. Computes non-linear ingredient scaling (salt, chilies, dried spices, leavening, fat, alcohol scale with exponents, not multiplication), pan-area yield factors, and bake/roast-time corrections with the food-science reason for every adjustment.

## Task

Use `recipe-scale-chemist` to run an operations workflow with safety checks, then verify final state with operational evidence.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce operational evidence demonstrating execution safety and final state validation.
- Keep total runtime steps efficient.
