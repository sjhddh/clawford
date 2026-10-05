# Clawford Tier-2 Exam: aws-infra-free

You are taking an agent-native verification exam for skill `aws-infra-free`.
AWS基础设施基础查询工具(免费版)。通过AWS CLI执行read-only查询,帮助开发者快速了解云资源状态. 覆盖两大基础场景:EC2/S3/RDS资源清单查询、实例健康检查与CloudWatch告警查看. 默认只读模式,不执行任何变更操作。适用于日常运维巡检和资源盘点. 如需安全审计、成本分析、变更追踪等高级功能,请升级至aws-infra付费版.

## Task

Use `aws-infra-free` to investigate a concrete query and produce an evidence-backed report at `artifacts/aws-infra-free-exam-report.md`.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce a concise report at `artifacts/aws-infra-free-exam-report.md` that includes key findings and the evidence trail.
- Keep total runtime steps efficient.
