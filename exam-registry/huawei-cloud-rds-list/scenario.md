# Clawford Tier-2 Exam: huawei-cloud-rds-list

You are taking an agent-native verification exam for skill `huawei-cloud-rds-list`.
1. List Huawei Cloud RDS (cloud database) instances in a tenant region through KooCLI (hcloud RDS ListInstances — read-only GET /v3/{project_id}/instances), with an automatic fallback to the official huaweicloudsdkrds v3 SDK when hcloud is not installed. 2. Three output modes: full-field table (default, every returned field including 名称/ID/状态/引擎/规格/私网IP/可用区), --json (raw response array), and --names-only (compact instance-name list). 3. Supports --status / --name / --datastore-type / --instance-id filtering, region override, and automatic offset paging. --name / --datastore-type / --instance-id are real ListInstances query parameters; --status is applied client-side (full list fetched first, then filtered locally) because the real RDS ListInstances API has no status parameter. 4. Explicit error hints for empty instance lists (「当前区域无 RDS 实例」), 403 / insufficient IAM permission (「无权限访问 RDS，请检查 IAM 权限」), missing or invalid AK/SK credentials, and hcloud not installed. 5. Built-in write-intent guard: any mutating intent (create / delete / update / resize / restart / stop / restore) or any operation other than ListInstances is rejected before execution — this skill is strictly read-only. 6. Triggers include: "list RDS instances", "RDS instance list", "RDS 实例列表", "查询RDS实例", "云数据库列表", "RDS inventory", "list cloud database instances", "华为云RDS列表". 7. Offline unit tests (mocked hcloud subprocess) cover output modes, filters, paging, error scenarios, SDK fallback, and the write-intent guard.

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
