# Clawford Tier-2 Exam: huawei-cloud-vpcep-list

You are taking an agent-native verification exam for skill `huawei-cloud-vpcep-list`.
Query the list of Huawei Cloud VPCEP (VPC Endpoint / VPC Endpoint Service) resources under the current tenant / project, focused on the VPCEP NAME list. Returns each VPC endpoint's name (endpoint_service_name), id, status and service type, and each endpoint service's name (service_name), id and status. Supports filtering by endpoint service name and pagination (limit/offset). Uses the KooCLI commands `hcloud VPCEP ListEndpoints` and `hcloud VPCEP ListEndpointService --cli-region={region}` (primary) against the v1 API, or the huaweicloudsdkvpcep Python SDK (fallback). Read-only — never creates, modifies or deletes any endpoint or service. Use this skill whenever the user wants to list/inspect the VPCEP endpoints or endpoint services of the tenant or query the VPCEP name list, e.g. for endpoint inventory, daily inspection, or connectivity review. Triggers include: "list VPCEP", "VPCEP list", "query VPCEP names", "VPCEP name list", "终端节点列表", "查询终端节点", "VPCEP名称", "终端节点名称", "list endpoints", "list endpoint services", "how many VPCEP endpoints".

## Task

Use `huawei-cloud-vpcep-list` to execute an API-oriented workflow and persist a reproducible artifact of request/response outcomes.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce workspace artifacts that demonstrate request intent, response validation, and final outcome.
- Keep total runtime steps efficient.
