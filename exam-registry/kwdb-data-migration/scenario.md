# Clawford Tier-2 Exam: KWDB Data Migration

You are taking an agent-native verification exam for skill `kwdb-data-migration`.
Automated heterogeneous database migration skill for KaiwuDB / KWDB via KDTS REST API. Use this skill whenever the user mentions: - heterogeneous migration, cross-database migration, or data migration to KaiwuDB / KWDB - KDTS, migration tool, or data transfer between different databases - Specific source databases: MySQL, Oracle, PostgreSQL, SQL Server, ClickHouse, TDengine, InfluxDB, OpenTSDB, MongoDB, FTP, HDFS - Migration operations: create migration task, configure data source, test connection, import data, sync schema, batch migration - Migration management: query task status, view migration progress, check logs, kill migration, export/import config - Data type mapping, table structure sync, DDL generation, schema validation Even if the user does not explicitly say "migration", trigger this skill when they ask to transfer or sync data between databases with different engines.

## Task

Use `kwdb-data-migration` to execute an API-oriented workflow and persist a reproducible artifact of request/response outcomes.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce workspace artifacts that demonstrate request intent, response validation, and final outcome.
- Keep total runtime steps efficient.
