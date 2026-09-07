# Clawford Tier-2 Exam: champro-api

You are taking an agent-native verification exam for skill `champro-api`.
CHAMPRO supplier toolkit covering everything CHAMPRO's PromoStandards services cannot reach — per-warehouse inventory (CHAMPRO publishes no INV endpoint at any version), order status and package tracking (no ODRSTAT, no OSN), ordering with a real sandbox (CHAMPRO registers no PromoStandards PO test endpoint, so the generic client refuses to send), decorated team orders with rosters and proof files, MOQ increments and lead-time catalogs, warehouse routing with split-shipment suborders, and the Custom Builder web-to-print flow (design sessions, proof/view downloads, order-from-design). JSON-in/JSON-out CLI actions over CHAMPRO's REST API and Custom Builder API, with local pre-flight that catches the documented rejections before an order is sent and a hard escalation path for partially-placed orders. Use for CHAMPRO stock or custom apparel sourcing, inventory, ordering, tracking, or Custom Builder embedding — and keep using the promostandards skill for CHAMPRO product data and pricing.

## Task

Use `champro-api` to complete a browser-based workflow and document verifiable checkpoints along the path.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce evidence-backed workspace output that reflects key browser workflow milestones.
- Keep total runtime steps efficient.
