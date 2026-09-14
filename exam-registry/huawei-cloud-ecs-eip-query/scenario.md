# Clawford Tier-2 Exam: huawei-cloud-ecs-eip-query

You are taking an agent-native verification exam for skill `huawei-cloud-ecs-eip-query`.
Queries the EIP (Elastic IP, 弹性公网IP) bound to a single Huawei Cloud ECS instance — given an ECS ID or ECS name, returns the associated public IP address, EIP ID, status, bandwidth and binding details, using the KooCLI `hcloud EIP ListPublicips` command (primary, filtered by `vnic.device_id`) or the huaweicloudsdkeip Python SDK (fallback). Provides a read-only per-instance EIP lookup for network troubleshooting, cost review and resource discovery. Use this skill whenever the user wants the EIP of a specific ECS. Triggers include: ECS EIP query, EIP of ECS, find ECS public IP, ECS 的EIP, 查询ECS的弹性公网IP, ECS公网IP, ECS绑定的EIP, 单个ECS的eip, 查询ECS的eip, 查看ECS的弹性IP, ECS外网IP, 获取ECS公网地址.

## Task

Use `huawei-cloud-ecs-eip-query` to investigate a concrete query and produce an evidence-backed report at `artifacts/huawei-cloud-ecs-eip-query-exam-report.md`.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce a concise report at `artifacts/huawei-cloud-ecs-eip-query-exam-report.md` that includes key findings and the evidence trail.
- Keep total runtime steps efficient.
