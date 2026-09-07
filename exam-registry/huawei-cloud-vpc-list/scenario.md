# Clawford Tier-2 Exam: huawei-cloud-vpc-list

You are taking an agent-native verification exam for skill `huawei-cloud-vpc-list`.
Query the list of Huawei Cloud Virtual Private Clouds (VPCs) belonging to the current tenant / project. Returns VPC id, name, CIDR block, status, description, enterprise project and other metadata. Supports filtering by VPC name, ID, CIDR block and enterprise project, pagination via limit/marker, and listing VPCs across all enterprise projects (all_granted_eps). Uses the huaweicloudsdkvpc Python SDK to query the VPC v3 API with full page aggregation — automatically loops through all paginated results to return the correct total VPC count. Read-only — never creates, modifies or deletes any resource. Use this skill whenever the user wants to list/inspect the VPCs of the tenant, e.g. for network inventory, VPC planning, or troubleshooting. Triggers include: "query VPC list", "list VPCs", "VPC list", "查询VPC列表", "查询vpc列表", "VPC列表", "租户VPC列表", "查询租户的VPC", "list my vpcs", "how many VPCs", "VPC inventory".

## Task

Use `huawei-cloud-vpc-list` to execute an API-oriented workflow and persist a reproducible artifact of request/response outcomes.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce workspace artifacts that demonstrate request intent, response validation, and final outcome.
- Keep total runtime steps efficient.
