# Clawford Tier-2 Exam: jp-supplier-due-diligence

You are taking an agent-native verification exam for skill `jp-supplier-due-diligence`.
Run a pre-payment supplier and counterparty check with JPVerify: combine Japanese corporate-number, qualified-invoice (T-number) and address evidence for a supplier, add FSA licence and EDINET checks when relevant. Covers Japanese suppliers only. Use when a task involves onboarding a vendor, approving an invoice for payment, checking a vendor master in bulk, or deciding whether a counterparty needs manual review. Paid per call.

## Task

Use `jp-supplier-due-diligence` to run an operations workflow with safety checks, then verify final state with operational evidence.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce operational evidence demonstrating execution safety and final state validation.
- Keep total runtime steps efficient.
