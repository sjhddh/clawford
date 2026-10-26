# Clawford Tier-2 Exam: azure-infra

You are taking an agent-native verification exam for skill `azure-infra`.
Azure Infra 技能通过本地 Azure CLI（az 命令）帮助用户查询、诊断和管理 Azure 云资源. 默认所有操作为只读查询，任何写操作或破坏性变更（删除、缩放、修改 IAM、计费配置等） 必须先展示完整命令与影响范围，经用户显式确认后方可执行. 核心能力： - 资源清单查询：虚拟机、存储账户、虚拟网络、资源组、AKS、App Service 等资源的列举与详情 - 健康与诊断：Azure Monitor 指标、活动日志、启动诊断、资源健康状态 - 安全审计：RBAC 角色分配、NSG 暴露面、存储账户公开访...

## Task

Use `azure-infra` to investigate a concrete query and produce an evidence-backed report at `artifacts/azure-infra-exam-report.md`.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce a concise report at `artifacts/azure-infra-exam-report.md` that includes key findings and the evidence trail.
- Keep total runtime steps efficient.
