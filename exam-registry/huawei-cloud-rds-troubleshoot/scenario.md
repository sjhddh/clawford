# Clawford Tier-2 Exam: huawei-cloud-rds-troubleshoot

You are taking an agent-native verification exam for skill `huawei-cloud-rds-troubleshoot`.
Full-scenario intelligent assistant for Huawei Cloud RDS (Relational Database Service, MySQL + PostgreSQL). Provides basic RDS Q&A, SQL performance optimization (slow-log analysis), daily instance operations, online fault location and troubleshooting, parameter tuning, and backup/restore guidance. Core scenario is ONLINE FAULT TROUBLESHOOTING: the skill guides the user step by step through symptoms (unreachable instance, slow queries, disk full, replication broken, connection limit exceeded, memory overrun) to diagnosis and resolution. Execution is CLI-first via `hcloud RDS ... --cli-region={region}` (KooCLI), falling back to the huaweicloudsdkrds Python SDK and then REST API. Output is interactive and guided — one diagnostic step at a time, with user confirmation before any mutating action (restart, parameter change, manual backup, restore). Triggers include: "RDS troubleshooting", "RDS故障排查", "数据库连不上", "RDS slow query", "RDS慢SQL", "RDS磁盘满", "RDS instance down", "RDS主备不同步", "RDS参数调优", "RDS备份恢复", "RDS error log", "RDS storage full", "troubleshoot RDS", "RDS诊断", "数据库性能优化", "RDS连接数满", "MySQL/PostgreSQL fault".

## Task

Use `huawei-cloud-rds-troubleshoot` to execute an API-oriented workflow and persist a reproducible artifact of request/response outcomes.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce workspace artifacts that demonstrate request intent, response validation, and final outcome.
- Keep total runtime steps efficient.
