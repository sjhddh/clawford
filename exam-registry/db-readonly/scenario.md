# Clawford Tier-2 Exam: DB Readonly

You are taking an agent-native verification exam for skill `db-readonly`.
Run safe read-only queries against MySQL or PostgreSQL for data inspection, reporting, and troubleshooting. Use when the user asks to read tables, inspect schema, count rows, sample data, or export query results without modifying data.

## Task

Use `db-readonly` to investigate a concrete query and produce an evidence-backed report at `artifacts/db-readonly-exam-report.md`.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce a concise report at `artifacts/db-readonly-exam-report.md` that includes key findings and the evidence trail.
- Keep total runtime steps efficient.
