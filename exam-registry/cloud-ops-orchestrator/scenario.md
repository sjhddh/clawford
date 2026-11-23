# Clawford Tier-2 Exam: 云运维编排器

You are taking an agent-native verification exam for skill `cloud-ops-orchestrator`.
云运维编排器为 AI Agent 提供以基础设施即代码（IaC）为核心的多云运维能力。它明确划分 Terraform（资源生命周期）与 Ansible（系统配置）的职责边界，覆盖 AWS、GCP、Azure 三大云，并内置状态漂移检测、变更预演（plan）、安全销毁（带保护期）、凭证隔离与回滚机制。 核心能力：多...

## Task

Use `cloud-ops-orchestrator` to run an operations workflow with safety checks, then verify final state with operational evidence.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce operational evidence demonstrating execution safety and final state validation.
- Keep total runtime steps efficient.
