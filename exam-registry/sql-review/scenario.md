# Clawford Tier-2 Exam: sql-review

You are taking an agent-native verification exam for skill `sql-review`.
Pre-commit SQL code review for uncommitted database changes. Detects antipatterns that cause real production incidents — `sp_send_dbmail` in CATCH blocks (masks the real error as a misleading permission denial), broken retry patterns (`@retry` declared without a surrounding `WHILE` loop), swallowing CATCH blocks (no `THROW`/`RAISERROR`/log), new tables created without a primary key or any index (silent perf-then-deadlock killer), parameter-vs-column type mismatches (8152 truncation risk), `EXEC()` string concatenation without `sp_executesql` parameters (SQL injection), `NOLOCK` in write paths, `UPDATE`/`DELETE` without `WHERE`, cursors without `READ_ONLY FORWARD_ONLY LOCAL`, hardcoded env values (emails, server names, paths), cross-DB references like `msdb.dbo.*`, missing `SET NOCOUNT ON`, missing `GRANT EXECUTE` on `CREATE PROC`, `BEGIN TRANSACTION` outside `TRY`/`CATCH`, and vestigial control-flow comments hinting at refactor leftovers (e.g. `-- end while loop` with no `WHILE`). Reports findings as `BLOCKER` / `WARN` / `INFO` with `file:line` citations and per-finding fix recommendations. **Never edits SQL** — surfaces findings for human review. Use this skill whenever the user says "/sql-review", "review my SQL", "review the SQL diff", "lint the SQL", "check my SQL changes", "SQL pre-commit check", "audit my stored proc", or "any SQL antipatterns in this diff" — even if they don't explicitly say "SQL review skill". Distinct from `code-review` (general best-practice review) — this carries SQL-specific patterns that surface DB-layer production incidents.

## Task

Use `sql-review` to run an operations workflow with safety checks, then verify final state with operational evidence.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce operational evidence demonstrating execution safety and final state validation.
- Keep total runtime steps efficient.
