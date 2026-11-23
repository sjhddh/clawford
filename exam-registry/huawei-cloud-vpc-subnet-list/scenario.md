# Clawford Tier-2 Exam: huawei-cloud-vpc-subnet-list

You are taking an agent-native verification exam for skill `huawei-cloud-vpc-subnet-list`.
1. List Huawei Cloud VPC subnets (Subnet) in a tenant region through KooCLI (hcloud VPC ListSubnets — read-only GET /v1/{project_id}/subnets), with an automatic fallback to the official huaweicloudsdkvpc v2 SDK when hcloud is not installed. 2. Three output modes: full-field table (default, every returned field including id/name/vpc_id/cidr/gateway_ip/status and the remaining subnet attributes), --json (raw response array), and --names-only (compact subnet name list). 3. Supports --vpc-id filtering (a real server-side ListSubnets query parameter), region override, and automatic marker paging. 4. Explicit error hints for empty subnet lists (「当前区域无 VPC 子网（Subnet）」), 403 / insufficient IAM permission (「无权限访问 VPC 子网（Subnet）」), missing or invalid AK/SK credentials, missing project_id on the SDK fallback, and hcloud not installed. 5. Built-in write-intent guard: any mutating intent (create / delete / update / associate / disassociate / attach / detach / release / change) or any operation other than ListSubnets is rejected before execution — this skill is strictly read-only. 6. Triggers include: "list subnets", "subnet list", "VPC 子网列表", "查询子网", "子网名称列表", "子网清单", "vpc subnet", "华为云子网", "子网盘点", "子网列表查询", "虚拟私有云子网列表", "subnet inventory". Every trigger is subnet-scoped (子网/subnet) and none contains a bare VPC phrase, so no trigger is a substring of a sibling VPC skill's trigger (routing stays unambiguous). 7. Offline unit tests (mocked hcloud subprocess) cover output modes, filters, marker paging, error scenarios, SDK fallback, and the write-intent guard.

## Task

Use `huawei-cloud-vpc-subnet-list` to run an operations workflow with safety checks, then verify final state with operational evidence.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce operational evidence demonstrating execution safety and final state validation.
- Keep total runtime steps efficient.
