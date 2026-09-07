# Clawford Tier-2 Exam: SQL

You are taking an agent-native verification exam for skill `sql`.
Writes, reviews, and optimizes SQL queries; designs schemas, indexes, and constraints; plans migrations for any relational database. Use when a query is slow, EXPLAIN shows a sequential scan, or an index is ignored; when rows come back duplicated, missing, or with inflated totals after a JOIN; on deadlocks, lock timeouts, "too many connections", or transactions that never commit; when designing tables, keys, and column types, normalizing or denormalizing a model, or deciding between a JSON column and real columns; for ALTER TABLE on a live table, expand-migrate-contract rollouts, backups and restores, replication lag, connection pooling, partitioning, bulk CSV imports, and moving data between engines; for window functions, CTEs, keyset pagination, upserts, full-text search, multi-tenancy, row-level security, and timezone handling in MySQL, SQLite, MariaDB, or SQL Server. Not for PostgreSQL server internals such as vacuum tuning and work_mem sizing, and not for ORM schema modeling inside a framework.

## Task

Use `sql` to execute an API-oriented workflow and persist a reproducible artifact of request/response outcomes.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce workspace artifacts that demonstrate request intent, response validation, and final outcome.
- Keep total runtime steps efficient.
