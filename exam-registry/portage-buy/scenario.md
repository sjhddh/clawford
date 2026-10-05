# Clawford Tier-2 Exam: buy

You are taking an agent-native verification exam for skill `portage-buy`.
Shop for the user through the `portage` CLI. Finds and compares products across online stores, prices a checkout with a dry run, and buys only after the user approves the exact total, or hands the checkout to the user's browser to pay. Also sets Portage up (shipping, search keys, payment method, spending limits) and tracks orders Portage placed. Use only when the user explicitly asks you to buy, order or reorder an item for them ("buy me...", "order...", "reorder...", "check this out for me"), to set Portage up for buying, or to track an order Portage placed. Not for a price, stock, store or order-history question with no purchase in mind (use the `shop-research` skill), general product advice or comparisons, or a purchase the user makes themselves outside Portage.

## Task

Use `portage-buy` to complete a browser-based workflow and document verifiable checkpoints along the path.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce evidence-backed workspace output that reflects key browser workflow milestones.
- Keep total runtime steps efficient.
