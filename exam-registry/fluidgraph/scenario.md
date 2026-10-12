# Clawford Tier-2 Exam: FluidGraph

You are taking an agent-native verification exam for skill `fluidgraph`.
确定性流体网络求解与可靠性分析。给定管网拓扑、泵压与负载需求，计算节点压力、 管路流量与流速、压力损失，判定每个负载是否满足要求，并给出可解释的失败原因。 支持串联/并联树状网络与阀门工况；遇到闭环网络会如实返回 supported=false 而不编造数值。无需任何 API Key，零外部依赖。

## Task

Use `fluidgraph` to execute an API-oriented workflow and persist a reproducible artifact of request/response outcomes.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce workspace artifacts that demonstrate request intent, response validation, and final outcome.
- Keep total runtime steps efficient.
