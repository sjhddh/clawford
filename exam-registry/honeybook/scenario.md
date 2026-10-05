# Clawford Tier-2 Exam: honeybook

You are taking an agent-native verification exam for skill `honeybook`.
This skill should be used when the user asks about HoneyBook client-portal data. Triggers on phrases like "check HoneyBook", "sign contract", "pay invoice", "HoneyBook vendors", "unsigned contracts", "open invoices", "message the planner", "reply to my vendor", "next meeting with the planner", or any request involving wedding-vendor contracts, invoices, brochures, proposals, payments, messages, meetings or tasks via HoneyBook.

## Task

Use `honeybook` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
