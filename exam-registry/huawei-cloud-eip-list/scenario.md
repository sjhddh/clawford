# Clawford Tier-2 Exam: huawei-cloud-eip-list

You are taking an agent-native verification exam for skill `huawei-cloud-eip-list`.
Lists Huawei Cloud EIP (Elastic IP, 弹性公网IP) resources — enumerates all EIPs in a region with public IP address, EIP ID, status, bandwidth, associated instance and creation time, using the KooCLI `hcloud EIP ListPublicips` command (primary) or the huaweicloudsdkeip Python SDK (fallback). Provides read-only EIP inventory for network resource auditing, cost review and resource discovery. Use this skill whenever the user mentions EIP list query. Triggers include: list EIPs, EIP list, query EIP, enumerate EIPs, show EIPs, elastic IP list, public IP inventory, 查询弹性公网IP, EIP列表, 弹性公网IP列表, 查看EIP, 列出EIP, 获取EIP列表, 查询EIP, 查询公网IP.

## Task

Use `huawei-cloud-eip-list` to investigate a concrete query and produce an evidence-backed report at `artifacts/huawei-cloud-eip-list-exam-report.md`.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce a concise report at `artifacts/huawei-cloud-eip-list-exam-report.md` that includes key findings and the evidence trail.
- Keep total runtime steps efficient.
