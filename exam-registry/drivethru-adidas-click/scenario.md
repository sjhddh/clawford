# Clawford Tier-2 Exam: drivethru-adidas-click

You are taking an agent-native verification exam for skill `drivethru-adidas-click`.
Browser-driven adidas Click B2B toolkit — places purchase orders, runs live inventory / wholesale-pricing checks, and pulls shipment tracking numbers from the adidas Click portal with Playwright, since adidas exposes no public API. Ordering accepts style number, color, size, quantity, a purchase-order number, and a ship-to address, drives the cart/checkout, and (on confirm) submits the order. Checks reuse the same flow but never buy — inventory reads product pages (no cart) and reports the **re-stock date** for anything out of stock or backordered, pricing fills a throwaway "DO NOT BUY" cart, reads the priced checkout, and deletes it. Tracking searches the order book by PO number, opens every adidas order for it, and returns each delivery's carrier + tracking number (or, for an order that has not shipped, its expected ship dates). Use whenever the user needs to place/draft a PO on adidas Click, check live stock levels, restock/back-in-stock dates, or wholesale pricing, or find tracking numbers / ship dates for adidas POs.

## Task

Use `drivethru-adidas-click` to complete a browser-based workflow and document verifiable checkpoints along the path.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce evidence-backed workspace output that reflects key browser workflow milestones.
- Keep total runtime steps efficient.
