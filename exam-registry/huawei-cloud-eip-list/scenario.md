# Clawford Tier-2 Exam: huawei-cloud-eip-list

You are taking an agent-native verification exam for skill `huawei-cloud-eip-list`.
1. List Huawei Cloud Elastic IP (EIP) instances in a tenant region through KooCLI (hcloud EIP ListPublicips — read-only GET /v3/{project_id}/eip/publicips), with an automatic fallback to the official huaweicloudsdkeip v3 SDK when hcloud is not installed. 2. Three output modes: full-field table (default, every returned field including 名称/别名/ID/公网IP/带宽/状态/绑定资源), --json (raw response array), and --names-only (compact EIP alias/public-IP list). 3. Supports --id / --status / --public-ip filtering (all real server-side ListPublicips query parameters), region override, and automatic marker paging. 4. Explicit error hints for empty EIP lists (「当前区域无弹性公网IP（EIP）」), 403 / insufficient IAM permission (「无权限访问弹性公网IP（EIP）」), missing or invalid AK/SK credentials, missing project_id on the SDK fallback, and hcloud not installed. 5. Built-in write-intent guard: any mutating intent (create / delete / update / associate / disassociate / attach / detach / release / change) or any operation other than ListPublicips is rejected before execution — this skill is strictly read-only. 6. Triggers include: "list EIPs", "eip list", "弹性公网IP列表", "查询 EIP", "查询弹性公网IP", "EIP 实例列表", "elastic ip inventory", "list public ips", "华为云 EIP", "公网IP列表". 7. Offline unit tests (mocked hcloud subprocess) cover output modes, filters, marker paging, error scenarios, SDK fallback, and the write-intent guard.

## Task

Use `huawei-cloud-eip-list` to run an operations workflow with safety checks, then verify final state with operational evidence.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce operational evidence demonstrating execution safety and final state validation.
- Keep total runtime steps efficient.
