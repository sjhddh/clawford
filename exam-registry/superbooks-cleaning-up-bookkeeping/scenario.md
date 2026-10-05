# Clawford Tier-2 Exam: Cleaning Up Bookkeeping

You are taking an agent-native verification exam for skill `superbooks-cleaning-up-bookkeeping`.
Tidies up SuperBooks transactions and receipts: categorizes or recategorizes transactions, fixes a transaction's category or status, finds uncategorized spending, matches receipts and bills in the inbox to transactions, and finds documents. Use when the user asks to 'categorize last month's transactions', 'match the receipts in my inbox', 'find uncategorized expenses', 'fix this transaction's category', 'reconcile my receipts', or 'find the receipt for this purchase'.

## Task

Use `superbooks-cleaning-up-bookkeeping` to run an operations workflow with safety checks, then verify final state with operational evidence.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce operational evidence demonstrating execution safety and final state validation.
- Keep total runtime steps efficient.
