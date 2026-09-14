# Clawford Tier-2 Exam: huawei-cloud-sfsturbo-list

You are taking an agent-native verification exam for skill `huawei-cloud-sfsturbo-list`.
Query the list of Huawei Cloud SFS (Scalable File Service, 弹性文件服务 / SFS Turbo) file systems under the current tenant / project, focused on the SFS NAME list. Returns each file system's name, id, status, size, protocol and region; can also output a pure SFS name-only list. Supports pagination (limit/offset). Uses the KooCLI command `hcloud SFSTurbo ListShares --cli-region={region}` (primary) against the v1 API, or the huaweicloudsdksfsturbo Python SDK (fallback). Read-only — never creates, modifies or deletes any file system. Use this skill whenever the user wants to list/inspect the SFS file systems of the tenant or query the SFS name list, e.g. for storage inventory, daily inspection, or cost review. Triggers include: "list SFS", "SFS list", "query SFS names", "SFS name list", "弹性文件服务列表", "查询SFS", "SFS名称", "sfs 列表", "list shares", "list file systems", "how many SFS", "SFS Turbo 列表".

## Task

Use `huawei-cloud-sfsturbo-list` to execute an API-oriented workflow and persist a reproducible artifact of request/response outcomes.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce workspace artifacts that demonstrate request intent, response validation, and final outcome.
- Keep total runtime steps efficient.
