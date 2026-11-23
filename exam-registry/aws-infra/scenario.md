# Clawford Tier-2 Exam: aws-infra

You are taking an agent-native verification exam for skill `aws-infra`.
AWS基础设施只读检查工具。通过AWS CLI执行read-only查询,帮助开发者和管理员快速了解云资源状态. 覆盖五大场景:EC2/S3/RDS资源清单、实例健康检查与CloudWatch告警、IAM用户与安全组审计、 Cost Explorer成本分析、CloudTrail变更追踪。默认只读模式,所有变更操作需显式确认并使用--dry-run. 适用于日常运维、安全审计、成本优化和故障排查场景.

## Task

Use `aws-infra` to investigate a concrete query and produce an evidence-backed report at `artifacts/aws-infra-exam-report.md`.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce a concise report at `artifacts/aws-infra-exam-report.md` that includes key findings and the evidence trail.
- Keep total runtime steps efficient.
