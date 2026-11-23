# Clawford Tier-2 Exam: postgres-aiops

You are taking an agent-native verification exam for skill `postgres-aiops`.
Use this skill whenever the user needs to operate or troubleshoot a PostgreSQL server/cluster as a DBA — a one-shot cluster health overview; server reads (version/uptime, settings, extensions, databases, roles); activity (sessions, idle-in-transaction, long-running queries, locks); query stats (pg_stat_statements top-N, EXPLAIN a statement); index health (unused indexes, missing-index hints, bloat, invalid/duplicate); table health (sizes, dead-tuple bloat, autovacuum status); replication (standby lag, replication slots, WAL); three flagship analyses — slow-query RCA (worst pg_stat_statements entry + EXPLAIN → cause/action), bloat & vacuum analysis (dead tuples + autovacuum lag → recommendation), and blocking lock-chain RCA (build the wait-for tree, name the root blocker); and guarded writes (terminate a backend, cancel a query, VACUUM/ANALYZE, create/drop an index, REINDEX, ALTER SYSTEM SET a parameter, reset query stats). Always use this skill for "postgres health check", "why is this query slow", "pg_stat_statements top queries", "EXPLAIN this", "table/index bloat", "which indexes are unused", "missing index", "autovacuum status", "who is blocking whom", "kill the backend holding the lock", "replication lag", "replication slots", "VACUUM this table", "create/drop an index", or "ALTER SYSTEM SET work_mem" when the context is a PostgreSQL database. Do NOT use when the target is OT / industrial equipment (Modbus, OPC-UA, PLCs — use industrial-aiops), a hypervisor, a storage appliance, a backup product, a container/cluster orchestrator, or a non-PostgreSQL database (negative routing hints only). Covers common PostgreSQL DBA operations with a built-in governance harness (audit, token budget, undo, risk-tiers). Beyond the mock suite, the reads plus a governed write and its undo have been exercised against a live PostgreSQL 16.14 instance (see docs/VERIFICATION.md).

## Task

Use `postgres-aiops` to run an operations workflow with safety checks, then verify final state with operational evidence.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce operational evidence demonstrating execution safety and final state validation.
- Keep total runtime steps efficient.
