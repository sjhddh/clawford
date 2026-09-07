# Clawford Tier-2 Exam: huawei-cloud-evs-list

You are taking an agent-native verification exam for skill `huawei-cloud-evs-list`.
Query the list of Huawei Cloud EVS (Elastic Volume Service) disks under the current tenant / project, focused on the EVS disk NAME list. Returns each disk's name, id, status and size; can also output a pure EVS name-only list. Supports filtering by status, name and pagination (limit/offset). Uses the KooCLI command `hcloud EVS ListVolumes --cli-region={region}` (primary) against the v2 API, or the huaweicloudsdkevs Python SDK (fallback). Read-only — never creates, modifies or deletes any disk. Use this skill whenever the user wants to list/inspect the EVS disks of the tenant or query the EVS disk name list, e.g. for disk inventory, daily inspection, or cost review. Triggers include: "list EVS", "EVS list", "query EVS names", "EVS name list", "云硬盘列表", "查询云硬盘", "EVS磁盘名称", "云硬盘名称", "list volumes", "list elastic volumes", "how many EVS disks".

## Task

Use `huawei-cloud-evs-list` to execute an API-oriented workflow and persist a reproducible artifact of request/response outcomes.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce workspace artifacts that demonstrate request intent, response validation, and final outcome.
- Keep total runtime steps efficient.
