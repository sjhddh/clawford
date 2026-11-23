# Clawford Tier-2 Exam: huawei-cloud-apig-instance-list

You are taking an agent-native verification exam for skill `huawei-cloud-apig-instance-list`.
1. List Huawei Cloud APIG dedicated instances in a tenant region through KooCLI (hcloud APIG ListInstancesV2 — read-only GET /v2/{project_id}/apigw/instances), with an automatic fallback to the official huaweicloudsdkapig v2 SDK when hcloud is not installed. 2. Drill down into one instance's API inventory with --instance-id (hcloud APIG ListApisV2 — read-only GET /v2/{project_id}/apigw/instances/{instance_id}/apis); an unknown instance id is reported explicitly with a non-zero exit code. 3. Three output modes: compact list (default — instance name / id / status), --table (实例ID/名称/状态/规格/版本/可用区/EIP/VPC/创建时间), and --json (raw response records). 4. Client-side filters --name (--fuzzy for substring match), --instance-id and --status; --region override (default cn-north-4); --limit 1-100 with automatic offset/limit paging. 5. Explicit error hints for empty instance lists, 403 / insufficient IAM permission, missing or invalid AK/SK credentials, [USE_ERROR] parameter errors, and a non-existent instance id. 6. Built-in write-intent guard: any mutating intent (create / delete / update / publish / offline / bind-eip / unbind-eip / ...) is rejected before execution — this skill is strictly read-only. 7. Triggers include: "list APIG instances", "APIG 实例列表", "查询APIG实例", "APIG 专享版实例", "apig instance inventory", "查询实例API列表", "APIG API 列表", "apig gateway list".

## Task

Use `huawei-cloud-apig-instance-list` to execute an API-oriented workflow and persist a reproducible artifact of request/response outcomes.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce workspace artifacts that demonstrate request intent, response validation, and final outcome.
- Keep total runtime steps efficient.
