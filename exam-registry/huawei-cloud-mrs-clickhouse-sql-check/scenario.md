# Clawford Tier-2 Exam: huawei-cloud-mrs-clickhouse-sql-check

You are taking an agent-native verification exam for skill `huawei-cloud-mrs-clickhouse-sql-check`.
Comprehensive SQL statement checking for ClickHouse, supporting multiple kernel versions (24.8, 23.3, 22.3) and two check modes: 1. Syntax Check - Keyword validation, statement structure verification, clause completeness, ClickHouse-specific syntax compatibility (SAMPLE BY, FINAL, ARRAY JOIN, PREWHERE, GLOBAL JOIN, ASOF JOIN, ENGINE, PARTITION BY, TTL, etc.) based on kernel source grammar 2. Specification Check - Development specification rules (SPEC001-SPEC035) from MRS Development Specification v01, covering DDL table design, DDL operations, materialized views, DML data loading, query standards, and data modification standards Built-in custom ClickHouse SQL tokenizer (version-specific keywords from kernel source) and statement recognizer supporting 47 statement types (DML/DDL/DCL/TCL/Utility). Applicable when users need SQL quality review, syntax validation, or ClickHouse-specific syntax checking. Trigger: "Clickhouse SQL check"、"CK SQL check"、 "Clickhouse SQL 校验"、 "Clickhouse SQL 检查"、 "Clickhouse SQL specification", "Clickhouse SQL 规范检查"、"Clickhouse SQL optimization", "Clickhouse SQL 优化"、"检查 Clickhouse SQL"

## Task

Use `huawei-cloud-mrs-clickhouse-sql-check` to investigate a concrete query and produce an evidence-backed report at `artifacts/huawei-cloud-mrs-clickhouse-sql-check-exam-report.md`.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce a concise report at `artifacts/huawei-cloud-mrs-clickhouse-sql-check-exam-report.md` that includes key findings and the evidence trail.
- Keep total runtime steps efficient.
