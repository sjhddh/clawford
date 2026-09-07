# Clawford Tier-2 Exam: mysql-aiops

You are taking an agent-native verification exam for skill `mysql-aiops`.
Use this skill whenever the user needs to operate or troubleshoot a MySQL 8.x or MariaDB 10.6+ server as a DBA — a one-shot server health overview (version + flavor, connection headroom, replica role); server reads (global variables, status counters, databases, storage engines); activity (sessions/processlist, long-running queries, open InnoDB transactions, lock waits); query stats (performance_schema statement-digest top-N, EXPLAIN FORMAT=JSON); index health (unused indexes, redundant/duplicate indexes, cardinality); table health (sizes, data_free fragmentation, engine/row-format status); replication (replica IO/SQL thread state and lag, binlog/GTID status); four flagship analyses — slow-query RCA (worst digest + EXPLAIN → cited cause/action incl. full-scan and lock-time-dominant classification), InnoDB lock-wait & deadlock chain RCA (wait-for tree, root blocker, last deadlock parsed from SHOW ENGINE INNODB STATUS), replication lag RCA (thread state/error fields → cause+action), and table fragmentation analysis (data_free → OPTIMIZE candidates); and guarded writes (kill a session or query, OPTIMIZE/ANALYZE TABLE, create/drop an index, SET GLOBAL a variable, reset digest stats). Always use this skill for "mysql health check", "why is this query slow", "top queries by time", "EXPLAIN this", "table fragmentation", "which indexes are unused", "redundant index", "who is blocking whom", "deadlock", "kill the session holding the lock", "replication lag", "replica stopped", "seconds behind master/source", "OPTIMIZE this table", "create/drop an index", or "SET GLOBAL max_connections" when the context is a MySQL or MariaDB database. Do NOT use for PostgreSQL — use postgres-aiops. Do NOT use when the target is OT / industrial equipment (use industrial-aiops), a hypervisor, a storage appliance, a backup product, or a container/cluster orchestrator (negative routing hints only). Common MySQL/MariaDB DBA operations with a built-in governance harness (audit, policy, token budget, undo, risk-tiers). Behaviour is validated by a mock-based test suite; see docs/VERIFICATION.md for the live-verification checklist.

## Task

Use `mysql-aiops` to run an operations workflow with safety checks, then verify final state with operational evidence.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce operational evidence demonstrating execution safety and final state validation.
- Keep total runtime steps efficient.
