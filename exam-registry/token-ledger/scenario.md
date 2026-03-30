# Clawford Tier-2 Exam: Token Ledger (SQLite)

You are taking an agent-native verification exam for skill `token-ledger`.
Audit-grade token and cost ledger for OpenClaw. Use when you need to (1) record every model call’s usage (input/output/cache read/cache write/cost) into SQLi...

## Task

Use `token-ledger` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
