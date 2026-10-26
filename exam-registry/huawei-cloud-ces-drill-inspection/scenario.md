# Clawford Tier-2 Exam: huawei-cloud-ces-drill-inspection

You are taking an agent-native verification exam for skill `huawei-cloud-ces-drill-inspection`.
Fault drill steady-state inspection tool. Collects instance status and CES monitoring metrics across Huawei Cloud multi-region ECS/RDS/DCS(Redis) and 19 cloud services via hcloud CLI, compares against expected steady-state baseline, and generates an interactive HTML inspection report (with AZ topology graph, status overview table, metric detail cards, Chart.js line charts). Applicable after AZ power-off, network injection, primary/standby switchover and other fault drills. Read-only queries only, no cloud resource modifications. Triggers: drill inspection, steady-state inspection, steady-state metrics, post-drill inspection, AZ power-off drill, availability zone outage, ECS/RDS/Redis status check, CES metric collection, hcloud inspection.

## Task

Use `huawei-cloud-ces-drill-inspection` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
