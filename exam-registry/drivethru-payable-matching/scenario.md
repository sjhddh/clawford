# Clawford Tier-2 Exam: drivethru-payable-matching

You are taking an agent-native verification exam for skill `drivethru-payable-matching`.
Payable matching for BaconCo — reconcile vendor documents in Odoo's Documents app against their purchase orders and correct incorrect PO line pricing. Use for requests like "check the Purchasing folder against the POs and fix the pricing", "match the vendor invoice / order confirmation / acknowledgement to its PO", "AP price matching / invoice-to-PO matching / three-way match", "reconcile the vendor documents and mark the POs checked", or "go through the Purchasing folder". The flow: read every document in a Documents-app folder (extracting text out-of-context so large batches don't bloat the context window — falling back to a page render + OCR/vision for scanned or custom-encoded PDFs that won't extract as text), pull the PO number / line items / unit prices from each, compare to the purchase order line by line, correct any wrong `price_unit`, post a "checked" log note on the PO (internal, never a "Send message"), and FILE every document into the `Matched` or `Questions` subfolder — escalating genuine questions to a reviewer (default Zach Tucker). Also runs the buying-group payables flow: pull Sports Inc invoices from the SportsLink API (via the `sportsinc-sportslink` adapter), reconcile each to its PO, correct price variances, create the vendor bill and — when the bill total matches the invoice within tolerance — POST it, leaving any mismatch in draft for a human ("get the Sports Inc invoices and bill them", "match the SI invoices to POs and post the payables", "match the vendor invoice and post the bill if it matches"). Handles the multi-shipment case where one PO returns several Sports Inc invoices, splitting it into one vendor bill per shipment via `account.move.line` edits (the `ap_*_bill_line(s)` tools). Runs at volume on a low-cost model. Driven by the Odoo `drivethru_mcp` MCP server; complements the broader `drivethru-odoo` skill.

## Task

Use `drivethru-payable-matching` to execute an API-oriented workflow and persist a reproducible artifact of request/response outcomes.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce workspace artifacts that demonstrate request intent, response validation, and final outcome.
- Keep total runtime steps efficient.
