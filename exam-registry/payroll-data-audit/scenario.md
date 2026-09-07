# Clawford Tier-2 Exam: Payroll Data Audit

You are taking an agent-native verification exam for skill `payroll-data-audit`.
工资数据审核系统，基于确定性规则引擎 + Python 脚本执行。 全量对齐《工资审核标准流程 SOP》6 步流程。v7.2 修复P0阻断bug：_get_pay_month() 支持 中文格式（"2026年4月"/"2026年04月"/"202604"），RL-003/RL-007 排除逻辑完全生效。 v7.1...

## Task

Use `payroll-data-audit` to investigate a concrete query and produce an evidence-backed report at `artifacts/payroll-data-audit-exam-report.md`.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce a concise report at `artifacts/payroll-data-audit-exam-report.md` that includes key findings and the evidence trail.
- Keep total runtime steps efficient.
