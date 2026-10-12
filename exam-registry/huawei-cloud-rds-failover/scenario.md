# Clawford Tier-2 Exam: huawei-cloud-rds-failover

You are taking an agent-native verification exam for skill `huawei-cloud-rds-failover`.
华为云 RDS 主备倒换演练工具。一键式覆盖 prepare（准备检查）→ execute（执行倒换）→ report（生成报告）全流程。 查询 RDS HA 实例、检查 IAM 权限、安全执行主备倒换、轮询等待完成、收集日志和 CES 监控数据、生成综合 HTML 报告。 prepare 阶段内置风险评估（复制状态、存储水位、备份兜底、负载、复制延迟等）， 严重风险默认阻止倒换（需 --force 人工确认）。 支持 MySQL、PostgreSQL、SQL Server、MariaDB、TaurusDB（GaussDB for MySQL）。 Triggers: RDS主备倒换, 主备倒换演练, failover, RDS故障演练, 主备切换, 倒换实验, rds failover, RDS failover, 高可用演练, 高可用验证, RDS HA切换, 主备互换, RDS switchover, 数据库故障演练, RDS容灾演练。

## Task

Use `huawei-cloud-rds-failover` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
