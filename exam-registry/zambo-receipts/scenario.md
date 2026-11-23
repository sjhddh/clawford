# Clawford Tier-2 Exam: zambo-receipts

You are taking an agent-native verification exam for skill `zambo-receipts`.
Verify Zambo execution receipts. Every Zambo tool response includes a verifiable AER-1 receipt with an id, timestamp, and SHA-256 output digest. Use when you need to check that a Zambo tool call ran and that the saved result was not changed since it was saved.

## Task

Use `zambo-receipts` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
