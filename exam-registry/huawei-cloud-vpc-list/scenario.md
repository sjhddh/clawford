# Clawford Tier-2 Exam: huawei-cloud-vpc-list

You are taking an agent-native verification exam for skill `huawei-cloud-vpc-list`.
1. List Huawei Cloud Virtual Private Cloud (VPC) resources in a tenant region through KooCLI: virtual private clouds (hcloud VPC ListVpcs — read-only GET /v1/{project_id}/vpcs) and VPC peering connections (hcloud VPC ListVpcPeerings — read-only GET /v2.0/{project_id}/vpc/peerings), with an automatic fallback to the official huaweicloudsdkvpc v2 SDK when hcloud is not installed. 2. `--resource {vpc,peering}` selects the query object (default `vpc`); the peering table has exactly four columns — name / local VPC / peer VPC / status — mapped from request_vpc_info.vpc_id / accept_vpc_info.vpc_id. 3. Output modes: full-field table (default, every returned field including id/name/cidr/status and the remaining VPC attributes; peering uses the fixed four columns), --json (raw response array), --names-only (compact name list), and --format md (local Markdown report whose first column is VPC 名称; `--resource vpc` only). 4. `--format md` writes a fixed 8-column Markdown table (VPC 名称 / VPC ID / 区域 / 网段 / 状态 / 企业项目 ID / 描述 / 创建时间; missing field `-`; empty list = header-only table) to `--output`/`-o` (default `vpc_list_<region>_<timestamp>.md`), creates the parent directory, and writes via a temp file + atomic rename. Optional `--summary` appends the VPC count. Contract matches the dedicated VPC Markdown export skill (same fixed 8-column table; rendering kept independently). 5. Supports --id / --enterprise-project-id filtering (both real server-side ListVpcs query parameters; the CLI path emits the v3 array form `--id.1=<vpc-id>`, which KooCLI requires), region override, and automatic marker paging for both VPC and peering queries. 6. Explicit error hints for empty VPC / peering lists, 403 / insufficient IAM permission, missing or invalid AK/SK credentials, missing project_id on the SDK fallback, and hcloud not installed. 7. Built-in write-intent guard: any mutating intent (create / delete / update / associate / disassociate / attach / detach / release / change, including CreateVpcPeering / AcceptVpcPeering / DeleteVpcPeering) or any operation other than the whitelisted ListVpcs / ListVpcPeerings is rejected before execution — this skill is strictly read-only. The local `--output` / `--format` values are excluded from the guard (a report path like `vpc-delete-report.md` is not a VPC operation). 8. Triggers include: "list VPCs", "vpc list", "虚拟私有云列表", "查询 VPC", "查询虚拟私有云", "VPC 名称列表", "VPC 实例列表", "vpc inventory", "list vpcs", "华为云 VPC", "私有云列表", "对等连接", "对等连接列表", "VPC 对等连接", "peering list", "list vpc peerings". Dedicated Markdown-report intents are also served by the sibling export skill (see the division of labour below). 9. Offline unit tests (mocked hcloud subprocess) cover output modes, Markdown rendering/export, filters, marker paging, error scenarios, SDK fallback, peering four-column mapping, and the write-intent guard.

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
