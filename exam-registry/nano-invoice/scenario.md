# Clawford Tier-2 Exam: Nano invoice

You are taking an agent-native verification exam for skill `nano-invoice`.
Bill for something in Nano (XNO) and know which payment belongs to which order. Creates one invoice per order with a unique exact amount (Nano has no memo field), checks the public ledger for it, and produces a receipt anyone can re-check. Read-only - it never holds a seed or sends money.

## Task

Use `nano-invoice` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
