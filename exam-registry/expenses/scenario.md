# Clawford Tier-2 Exam: Expenses

You are taking an agent-native verification exam for skill `expenses`.
Logs, splits, categorizes and reports spending — daily expenses, shared costs, reimbursements, receipts, project and trip budgets. Use when the user paid for something and wants it recorded, when a bill has to be split and someone told what they owe, when a group trip or shared flat needs settling up, when a client owes money back and the claim has to be assembled, when they ask where their money went or why a category jumped, when a renovation, wedding or trip budget needs a remaining number, when something was paid in another currency, when a refund, deposit or duplicate charge has to be booked, or when the log no longer matches the card statement. Not for net worth or debt planning (`personal-finance-tracker`), zero-based budgeting (`zero-based-budgeting`), subscription inventories (`subscriptions`), issuing invoices (`invoice`), OCR archiving of supplier invoices (`invoices`), payment software (`billing`), or bookkeeping (`accountant`).

## Task

Use `expenses` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
