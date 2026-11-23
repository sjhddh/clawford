# Clawford Tier-2 Exam: huawei-cloud-nat-list

You are taking an agent-native verification exam for skill `huawei-cloud-nat-list`.
1. List Huawei Cloud public NAT gateways in a tenant region through KooCLI (hcloud NAT ListNatGateways — read-only GET /v2/{project_id}/nat_gateways), with an automatic fallback to the official huaweicloudsdknat v2 SDK when hcloud is not installed. 2. Three output modes: full-field table (default, every returned field including ID/名称/规格/状态/关联VPC/状态/创建时间), --json (raw response array), and --names-only (compact NAT gateway name list). 3. Supports --name / --spec / --status / --vpc (router_id) filtering (all real server-side ListNatGateways query parameters), region override, and automatic marker paging. 4. Explicit error hints for empty NAT gateway lists (「当前区域无公网NAT网关」), 403 / insufficient IAM permission (「无权限访问公网NAT网关」), missing or invalid AK/SK credentials, missing project_id on the SDK fallback, and hcloud not installed. 5. Built-in write-intent guard: any mutating intent (create / delete / update / SNAT / DNAT rule changes / tag changes) or any operation other than ListNatGateways is rejected before execution — this skill is strictly read-only. 6. Triggers include: "list NAT gateways", "nat gateway list", "NAT网关列表", "查询NAT网关", "查询公网NAT网关", "公网NAT网关列表", "NAT 实例列表", "华为云 NAT", "nat gateway inventory". 7. Offline unit tests (mocked hcloud subprocess) cover output modes, filters, marker paging, error scenarios, SDK fallback, and the write-intent guard.

## Task

Use `huawei-cloud-nat-list` to run an operations workflow with safety checks, then verify final state with operational evidence.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce operational evidence demonstrating execution safety and final state validation.
- Keep total runtime steps efficient.
