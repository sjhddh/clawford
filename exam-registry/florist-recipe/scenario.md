# Clawford Tier-2 Exam: 花艺配方引擎

You are taking an agent-native verification exam for skill `florist-recipe`.
Generate executable florist recipes (flower formula, stem counts, budget breakdown, substitutions, assembly steps, care) from a natural-language occasion, budget, and style request. This skill should be used when a user asks to design a bouquet or vase arrangement, wants to know how many stems to buy for a given budget, needs a shopping list for a flower market, needs to substitute an out-of-stock flower while keeping the design intent, or asks for step-by-step assembly and care instructions.

## Task

Use `florist-recipe` to run an operations workflow with safety checks, then verify final state with operational evidence.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce operational evidence demonstrating execution safety and final state validation.
- Keep total runtime steps efficient.
