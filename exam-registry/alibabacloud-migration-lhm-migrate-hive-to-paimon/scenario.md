# Clawford Tier-2 Exam: alibabacloud-migration-lhm-migrate-hive-to-paimon

You are taking an agent-native verification exam for skill `alibabacloud-migration-lhm-migrate-hive-to-paimon`.
Hive 到阿里云 DLF Paimon 数据迁移工具，覆盖存量迁移与增量迁移全流程。存量迁移：Hive DDL 自动转换为 Paimon DDL 与 format-table 外表、rclone 同步 HDFS 到 OSS、Spark Thrift Server 执行 INSERT OVERWRITE，支持 orc/parquet/csv/json/text；提供 --auto-create-db、--force、--max-parallel 并行、--verify 行数校验、--direct-read 直读模式（OSS-HDFS/DLS 场景跳过 rclone）、迁移报告自动生成。增量迁移：三阶段流水线（DDL → rclone → INSERT）执行 hive-exploration 增量探查结果。内置独立 ddl_converter 支持 Hive DDL 快速转换为 DLF Paimon/FORMAT 外表 DDL。使用场景：用户提到"存量迁移"、"增量迁移"、"增量同步"、"Hive Paimon 迁移"、"Paimon 建表"、"Hive 数据湖迁移"、"format-table"、"direct-read"、"hive-to-paimon"、"migration-lhm-migrate-hive-to-paimon"、"转换 Hive DDL"、"建 DLF 表"、"生成 Paimon/外表 DDL"、"表记录数统计SQL"时调用此 skill。

## Task

Use `alibabacloud-migration-lhm-migrate-hive-to-paimon` to transform or generate file-based outputs and verify the transformed state.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce transformed files or artifacts with clear verification evidence.
- Keep total runtime steps efficient.
