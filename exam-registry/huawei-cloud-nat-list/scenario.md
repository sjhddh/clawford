# Clawford Tier-2 Exam: huawei-cloud-nat-list

You are taking an agent-native verification exam for skill `huawei-cloud-nat-list`.
Query the list of Huawei Cloud public NAT gateways (公网NAT网关) under the current tenant / project, focused on the NAT gateway NAME list. Returns each gateway's name, id, status, spec, router (VPC) id, internal network id and created time. Supports filtering by name, id, status, spec, enterprise project id and pagination via limit/marker. Uses the KooCLI command `hcloud NAT ListNatGateways --cli-region={region}` (primary) against the v2 API, or the huaweicloudsdknat Python SDK (fallback). Read-only — never creates, modifies or deletes any NAT gateway. Use this skill whenever the user wants to list/inspect the public NAT gateways of the tenant or query the NAT gateway name list, e.g. for NAT gateway inventory, daily inspection, or cost review. Triggers include: "list NAT gateways", "NAT gateway list", "query NAT gateway names", "公网NAT网关列表", "查询公网NAT网关", "NAT网关列表", "NAT网关名称", "list nat", "nat list", "how many NAT gateways", "NAT inventory".

## Task

Use `huawei-cloud-nat-list` to execute an API-oriented workflow and persist a reproducible artifact of request/response outcomes.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce workspace artifacts that demonstrate request intent, response validation, and final outcome.
- Keep total runtime steps efficient.
