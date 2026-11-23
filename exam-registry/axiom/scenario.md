# Clawford Tier-2 Exam: axiom

You are taking an agent-native verification exam for skill `axiom`.
Orders physical products the user asks for through Axiom, using the payment method saved in their Axiom account, checks which payment method Axiom has on file, and reviews past Axiom orders. Use when the user asks to buy, order, reorder, or purchase a specific physical product with Axiom, asks what payment method Axiom has on file, or asks about the status or receipt of an Axiom order. Before starting an order the model confirms it knows the merchant, the exact product, and required options (size, color, storage, flavor), asking the user first when anything is missing. Not for browsing, price comparison, subscriptions, digital goods, or orders the user has not clearly requested.

## Task

Use `axiom` to run an operations workflow with safety checks, then verify final state with operational evidence.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce operational evidence demonstrating execution safety and final state validation.
- Keep total runtime steps efficient.
