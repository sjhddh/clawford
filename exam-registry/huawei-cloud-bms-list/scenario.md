# Clawford Tier-2 Exam: huawei-cloud-bms-list

You are taking an agent-native verification exam for skill `huawei-cloud-bms-list`.
Query the list of Huawei Cloud BMS (Bare Metal Server) instances under the current tenant / project, focused on the BMS NAME list. Returns each server's name, id and status; can also output a pure BMS name-only list. Supports filtering by status, name and pagination (limit/offset). Uses the KooCLI command `hcloud BMS ListBareMetalServers --cli-region={region}` (primary) against the v1 API, or the huaweicloudsdkbms Python SDK (fallback). Read-only — never creates, modifies or deletes any bare metal server. Use this skill whenever the user wants to list/inspect the BMS instances of the tenant or query the BMS name list, e.g. for BMS inventory, daily inspection, or cost review. Triggers include: "list BMS", "BMS list", "query BMS names", "BMS name list", "裸金属服务器列表", "查询裸金属服务器", "BMS名称列表", "裸金属服务器名称", "list bare metal servers", "how many BMS".

## Task

Use `huawei-cloud-bms-list` to execute an API-oriented workflow and persist a reproducible artifact of request/response outcomes.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce workspace artifacts that demonstrate request intent, response validation, and final outcome.
- Keep total runtime steps efficient.
