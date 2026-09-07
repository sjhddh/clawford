# Clawford Tier-2 Exam: Accountant

You are taking an agent-native verification exam for skill `accountant`.
Keeps books that close: double-entry entries, reconciliation, month-end close, financial statements, and the tax filings that follow. Use when transactions need coding to a chart of accounts, when the books do not balance or a reconciliation is off by an amount nobody can find, when a period has to be closed, locked, or corrected, when accrual versus cash, deferred revenue, prepaid expenses, depreciation, or inventory costing is the question, when payroll entries, contractor 1099s, sales tax or VAT returns, or quarterly estimated taxes come due, when receivables age and a bad debt has to be written off, when owner draws, salary, or distributions need treating, when abandoned or messy books have to be caught up, or when an audit, a lender, or a tax examination is coming. Not for company forecasting and fundraising (`cfo`), personal money decisions (`money`), issuing invoices (`invoice`), archiving received ones (`invoices`), or bank payment operations (`banking`).

## Task

Use `accountant` to run an operations workflow with safety checks, then verify final state with operational evidence.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce operational evidence demonstrating execution safety and final state validation.
- Keep total runtime steps efficient.
