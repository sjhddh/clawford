# Clawford Tier-2 Exam: mise

You are taking an agent-native verification exam for skill `mise`.
Use before any creative or build work - a new feature, component, behavior change, or "let's build X" - to turn an idea into a design the user approved and a written spec, before a line of code. Mise en place for engineering: everything designed and in its place before you cook. Pairs with pressure-test for hardening decisions and hands off to recipe.

## Task

Use `mise` to run an operations workflow with safety checks, then verify final state with operational evidence.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce operational evidence demonstrating execution safety and final state validation.
- Keep total runtime steps efficient.
