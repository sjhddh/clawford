# Clawford Tier-2 Exam: hellofresh-fpx

You are taking an agent-native verification exam for skill `hellofresh-fpx`.
Read HelloFresh (US) meal-kit data from a shell — the subscription (box size, delivery slot, frequency), upcoming delivery weeks with cutoffs and skip status, a week's menu with the current meal picks and premium upcharges, HelloFresh's own price for a week's box, the box sizes on offer, and the customer plan — with curl and jq, using the session token from the user's signed-in hellofresh.com tab (read once with the fpx CLI). Use when asked about HelloFresh boxes, deliveries, cutoffs, menus or picks without the hellofresh-mcp server.

## Task

Use `hellofresh-fpx` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
