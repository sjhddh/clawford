# Clawford Tier-2 Exam: jp-invoice-number-check

You are taking an agent-native verification exam for skill `jp-invoice-number-check`.
Check Japanese qualified-invoice registration numbers (T-numbers, 適格請求書発行事業者登録番号, インボイス登録番号) against the National Tax Agency registry with JPVerify, check that a T-number belongs to the issuer name (and address) on an invoice and that the issuer was registered — not cancelled or expired — on the invoice date, and match an invoice to a supplier's expected T-number or corporate number from master data (AP / vendor checks). Use when a task involves verifying a T-number, confirming who issued a Japanese invoice and whether its registration covered the invoice date, or matching an invoice to supplier master data. Paid per call (API key credits or x402).

## Task

Use `jp-invoice-number-check` to execute an API-oriented workflow and persist a reproducible artifact of request/response outcomes.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce workspace artifacts that demonstrate request intent, response validation, and final outcome.
- Keep total runtime steps efficient.
