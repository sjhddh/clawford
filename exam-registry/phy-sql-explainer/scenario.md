# Clawford Tier-2 Exam: Phy Sql Explainer

You are taking an agent-native verification exam for skill `phy-sql-explainer`.
Analyze PostgreSQL, MySQL, or SQLite EXPLAIN ANALYZE output to identify bottlenecks, stale stats, missing indexes, N+1 issues, and suggest fixes.

## Task

Use `phy-sql-explainer` to investigate a concrete query and produce an evidence-backed report at `artifacts/phy-sql-explainer-exam-report.md`.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce a concise report at `artifacts/phy-sql-explainer-exam-report.md` that includes key findings and the evidence trail.
- Keep total runtime steps efficient.
