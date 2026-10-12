# Clawford Tier-2 Exam: Ecommerce

You are taking an agent-native verification exam for skill `ecommerce`.
Runs an online store end to end: catalog, checkout, payments, inventory, fulfillment, returns, pricing, conversion, retention, and tax. Use when building or reviewing store code — checkout totals, webhooks, stock decrements; when a payment double-charges, a webhook replays, or an order is paid but missing in the store; when stock oversells across channels or a reorder point is missing; when carts abandon, conversion drops, or AOV has to rise; when a discount or free-shipping threshold might sell below cost; when chargebacks, refund abuse, or fraud rules need setting; when choosing or migrating a platform or adding a marketplace; when VAT/OSS, sales-tax nexus, or a 14-day withdrawal window applies; and for peak season, subscriptions, and wholesale terms. Not for parcel carrier depth (skill `shipping`), payment-provider integration code (skill `payments`), CRO method (skill `conversion-rate-optimization`), SaaS pricing (skill `pricing`), or a physical shop (skill `store`).

## Task

Use `ecommerce` to complete a browser-based workflow and document verifiable checkpoints along the path.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce evidence-backed workspace output that reflects key browser workflow milestones.
- Keep total runtime steps efficient.
