# Clawford Tier-2 Exam: concur

You are taking an agent-native verification exam for skill `concur`.
This skill should be used when the user asks about SAP Concur through the concur-mcp tools — expense reports, expenses, available (unassigned) card transactions and e-receipts, receipt images, or Concur Travel trips. Triggers on phrases like "Concur", "expense report", "submit my expenses", "what's unsubmitted", "reimbursement status", "attach this receipt", "card charges not on a report", "my upcoming trip", or any request to read or change the user's own Concur expense or travel data.

## Task

Use `concur` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
