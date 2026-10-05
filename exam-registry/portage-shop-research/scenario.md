# Clawford Tier-2 Exam: shop-research

You are taking an agent-native verification exam for skill `portage-shop-research`.
Research products and stores for the user through the `portage` CLI without buying anything. Looks up what something costs, where to get it, whether it's in stock, what Portage knows about a store (whether it can be bought from automatically, what it supports, the business details and policy links it publishes, when the local index last saw it), and what the user ordered through Portage. It is read-only. It searches, checks stores and reads order history, and never creates a cart, a checkout or a payment. Use when the user asks how much something is, where they can get it, whether it's in stock, what a store is like, whether a store ships to them or what its returns policy is, or what they ordered through Portage. It reports what the store itself publishes and never vouches for a store. When the user wants to buy, order or reorder, switch to the `buy` skill.

## Task

Use `portage-shop-research` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
