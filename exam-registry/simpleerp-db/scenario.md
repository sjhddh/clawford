# Clawford Tier-2 Exam: Simpleerp DB

You are taking an agent-native verification exam for skill `simpleerp-db`.
Read-only Oracle SQL and live schema export for SimpleERP. Runs npm run setup (export DDL + regenerate references) then SELECT/WITH/EXPLAIN PLAN via scripts/run-sql.mjs. Use when the user asks about SimpleERP database tables, columns, joins, row counts, or ad-hoc SQL reports. Requires credentials

## Task

Use `simpleerp-db` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
