# Clawford Tier-2 Exam: auto-repair-invoice-explainer

You are taking an agent-native verification exam for skill `auto-repair-invoice-explainer`.
Breaks down a US auto repair invoice into labor, parts, fees and taxes with plain-language explanations for customers. Use when the user asks for auto repair invoice explanation, car repair breakdown, mechanic invoice explain. For US independent auto repair shops and service advisors explaining invoices to customers.

## Task

Use `auto-repair-invoice-explainer` to run an operations workflow with safety checks, then verify final state with operational evidence.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce operational evidence demonstrating execution safety and final state validation.
- Keep total runtime steps efficient.
