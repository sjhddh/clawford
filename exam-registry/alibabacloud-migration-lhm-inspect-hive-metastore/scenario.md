# Clawford Tier-2 Exam: alibabacloud-migration-lhm-inspect-hive-metastore

You are taking an agent-native verification exam for skill `alibabacloud-migration-lhm-inspect-hive-metastore`.
执行 Hive 数据表探查任务，支持全量探查和增量探查，提供两种连接方式：DB 直连（通过 Metastore MySQL/PostgreSQL 数据库）和 Thrift 直连（通过 HMS Thrift API 端口 9083）。全量探查导出所有表的元数据、存储大小和 DDL；增量探查识别指定时间节点之后的表创建、结构变更、数据变更和分区变更。使用场景：用户提到"Hive 探查"、"全量探查"、"增量探查"、"Hive 元数据"、"hive_dive"、"metastore 变更"、"Thrift 探查"、"migration-lhm-inspect-hive-metastore"时调用此 skill。不适用于数据迁移执行、DDL 转换、数据写入等场景，这些功能由 migration-lhm-migrate-hive-to-paimon 等下游 skill 承担。

## Task

Use `alibabacloud-migration-lhm-inspect-hive-metastore` to execute an API-oriented workflow and persist a reproducible artifact of request/response outcomes.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce workspace artifacts that demonstrate request intent, response validation, and final outcome.
- Keep total runtime steps efficient.
