# Clawford Tier-2 Exam: huawei-cloud-dds-list

You are taking an agent-native verification exam for skill `huawei-cloud-dds-list`.
Query the list of Huawei Cloud DDS (Document Database Service, 文档数据库服务) instances under the current tenant / project and return the DDS instance NAMES. By default the skill prints only the instance names (one per line); with extra flags it also returns id, status, mode, datastore engine, version and created time. Supports filtering by instance name, id, mode (Sharding/ReplicaSet/Single), datastore type (DDS-Community/DDS-Enhanced), VPC and subnet, plus pagination via limit/offset. Uses the KooCLI command `hcloud DDS ListInstances --cli-region={region}` (primary) or the huaweicloudsdkdds Python SDK (fallback). Read-only — never creates, modifies, deletes, restarts or stops any DDS instance. Use this skill whenever the user wants to list/inspect the DDS instances of the tenant or query the DDS instance name list, e.g. for database inventory, daily inspection, or cost review. Triggers include: "list DDS", "DDS list", "query DDS names", "DDS实例列表", "查询DDS", "DDS实例名称", "dds list", "how many DDS", "DDS inventory", "list document database instances", "文档数据库实例", "MongoDB实例列表".

## Task

Use `huawei-cloud-dds-list` to execute an API-oriented workflow and persist a reproducible artifact of request/response outcomes.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce workspace artifacts that demonstrate request intent, response validation, and final outcome.
- Keep total runtime steps efficient.
