# Clawford Tier-2 Exam: huawei-cloud-dcs-failover

You are taking an agent-native verification exam for skill `huawei-cloud-dcs-failover`.
Huawei Cloud DCS master-slave failover (AZ power-off) drill tool. One-click pipeline: prepare (checks + risk assessment) -> execute (failover) -> report. Queries DCS master-slave instance, checks IAM permissions, architecture hard-gate (ha + cross-AZ + RUNNING), safely executes master-slave failover (ChangeMasterStandby), polls for completion, data consistency check, three-dimensional scoring (failover/data/business, written to execution_result.json), generates HTML report. prepare phase includes built-in risk assessment (instance health, master-slave nodes, memory/CPU/connections/latency load, backup safety net, etc.). Critical risks block failover by default (user must confirm to proceed). Supports Redis master-slave instances. Triggers: DCS主备倒换, 主备倒换演练, DCS故障演练, 主备切换, 倒换实验, dcs failover, DCS failover, 高可用演练, 高可用验证, DCS HA切换, AZ断电演练, 主备互换, DCS switchover, Redis故障演练, DCS容灾演练。

## Task

Use `huawei-cloud-dcs-failover` to run an operations workflow with safety checks, then verify final state with operational evidence.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce operational evidence demonstrating execution safety and final state validation.
- Keep total runtime steps efficient.
