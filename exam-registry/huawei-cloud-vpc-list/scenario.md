# Clawford Tier-2 Exam: huawei-cloud-vpc-list

You are taking an agent-native verification exam for skill `huawei-cloud-vpc-list`.
1. List Huawei Cloud Virtual Private Cloud (VPC) instances in a tenant region through KooCLI (hcloud VPC ListVpcs — read-only GET /v1/{project_id}/vpcs), with an automatic fallback to the official huaweicloudsdkvpc v2 SDK when hcloud is not installed. 2. Three output modes: full-field table (default, every returned field including id/name/cidr/status and the remaining VPC attributes), --json (raw response array), and --names-only (compact VPC name list). 3. Supports --id / --enterprise-project-id filtering (both real server-side ListVpcs query parameters), region override, and automatic marker paging. 4. Explicit error hints for empty VPC lists (「当前区域无虚拟私有云（VPC）」), 403 / insufficient IAM permission (「无权限访问虚拟私有云（VPC）」), missing or invalid AK/SK credentials, missing project_id on the SDK fallback, and hcloud not installed. 5. Built-in write-intent guard: any mutating intent (create / delete / update / associate / disassociate / attach / detach / release / change) or any operation other than ListVpcs is rejected before execution — this skill is strictly read-only. 6. Triggers include: "list VPCs", "vpc list", "虚拟私有云列表", "查询 VPC", "查询虚拟私有云", "VPC 名称列表", "VPC 实例列表", "vpc inventory", "list vpcs", "华为云 VPC", "私有云列表". 7. Offline unit tests (mocked hcloud subprocess) cover output modes, filters, marker paging, error scenarios, SDK fallback, and the write-intent guard.

## Task

Use `huawei-cloud-vpc-list` to run an operations workflow with safety checks, then verify final state with operational evidence.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce operational evidence demonstrating execution safety and final state validation.
- Keep total runtime steps efficient.
