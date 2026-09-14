# Clawford Tier-2 Exam: azure-infra-free

You are taking an agent-native verification exam for skill `azure-infra-free`.
Azure Infra Free 是 Azure Infra 技能的免费精简版，通过本地 Azure CLI（az 命令） 提供 Azure 资源的只读查询能力。支持基础的资源清单查询与简单的健康检查， 不包含写操作、安全审计、成本分析等高级功能. 核心能力： - 资源清单查询：资源组、虚拟机、存储账户、虚拟网络等基础资源的列举 - 简单健康检查：查看虚拟机电源状态、查询失败的活动日志 - 只读优先：所有操作默认只读，不执行任何写操作或破坏性变更 适用场景： - 快速盘点订阅内的虚拟机与存储资源 - 查看虚拟机...

## Task

Use `azure-infra-free` to run an operations workflow with safety checks, then verify final state with operational evidence.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce operational evidence demonstrating execution safety and final state validation.
- Keep total runtime steps efficient.
