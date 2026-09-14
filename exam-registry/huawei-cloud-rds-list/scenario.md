# Clawford Tier-2 Exam: huawei-cloud-rds-list

You are taking an agent-native verification exam for skill `huawei-cloud-rds-list`.
Query the list of Huawei Cloud RDS (Relational Database Service, 云数据库) instances under the current tenant / project and return the RDS instance NAMES. By default the skill prints only the instance names (one per line); with extra flags it also returns id, status, engine type, flavor, private IPs and created time. Supports filtering by instance name, id, type (Single/Ha/Replica), datastore engine (MySQL/PostgreSQL/SQLServer/MariaDB) and VPC, plus pagination via limit/offset. Uses the KooCLI command `hcloud RDS ListInstances --cli-region={region}` (primary) or the huaweicloudsdkrds Python SDK (fallback). Read-only — never creates, modifies, deletes, restarts or stops any RDS instance. Use this skill whenever the user wants to list/inspect the RDS instances of the tenant or query the RDS instance name list, e.g. for database inventory, daily inspection, or cost review. Triggers include: "list RDS", "RDS list", "query RDS names", "RDS实例列表", "查询RDS", "RDS实例名称", "rds list", "how many RDS", "RDS inventory", "list database instances", "云数据库实例".

## Task

Use `huawei-cloud-rds-list` to execute an API-oriented workflow and persist a reproducible artifact of request/response outcomes.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce workspace artifacts that demonstrate request intent, response validation, and final outcome.
- Keep total runtime steps efficient.
