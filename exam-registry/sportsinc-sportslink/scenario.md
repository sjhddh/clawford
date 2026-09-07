# Clawford Tier-2 Exam: sportsinc-sportslink

You are taking an agent-native verification exam for skill `sportsinc-sportslink`.
Sports Inc SportsLink API adapter — pull a dealer's invoices ("documents") from the Sports Inc SportsWeb Invoice Center and mark them consumed. Sports Inc is a buying group that does NOT send individual vendor invoices; its SportsLink REST API is where the invoices live. Use when you need to retrieve Sports Inc invoices for payables — "get the Sports Inc invoices", "pull SportsLink documents", "fetch this month's SI invoices to match against POs". This is the SOURCE adapter only: it authenticates, pages, normalises each SI document into a common invoice shape (po_number, invoice_number/date, lines[], charges, total, is_credit), and marks documents historical once imported. Some documents are scanned rather than EDI, so the API returns their header totals with NO line items (`has_lines: false`) — every retrieval names those in `needs_line_recovery`, and they are not billable as returned. For each, this skill logs in to the SportsWeb portal, downloads the invoice PDF, OCRs the scanned vendor invoice into text for the agent to read, and then checks the extracted lines against the API's own merchandise total before any of it is billable. It is customer-agnostic (every Sports Inc dealer uses this same API) and touches no ERP — pair it with a payables workflow (e.g. `drivethru-payable-matching`) to match against POs and create the bill.

## Task

Use `sportsinc-sportslink` to complete a browser-based workflow and document verifiable checkpoints along the path.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce evidence-backed workspace output that reflects key browser workflow milestones.
- Keep total runtime steps efficient.
