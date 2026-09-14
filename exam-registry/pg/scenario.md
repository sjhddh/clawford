# Clawford Tier-2 Exam: PostgreSQL

You are taking an agent-native verification exam for skill `pg`.
Tunes, designs, and operates PostgreSQL: slow queries, indexes, schemas, migrations, vacuum, locks, replication, backups. Use when writing Postgres SQL or psql, designing tables and indexes, reading an EXPLAIN plan, running DDL or a migration against a live table, or when a query suddenly got slow, a table keeps growing while rows stay flat, autovacuum cannot keep up, "too many clients already" appears, a replica lags, deadlocks and lock waits pile up, pg_wal fills the disk, or an upgrade, a restore, or a partitioning plan is on the table. Covers connection pooling and PgBouncer, full-text, trigram and pgvector search, JSONB, roles and row-level security, PITR, extensions, and managed Postgres (RDS, Aurora, Cloud SQL, Neon, Supabase). Not for cross-engine SQL portability or ORM-level modeling.

## Task

Use `pg` to execute an API-oriented workflow and persist a reproducible artifact of request/response outcomes.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce workspace artifacts that demonstrate request intent, response validation, and final outcome.
- Keep total runtime steps efficient.
