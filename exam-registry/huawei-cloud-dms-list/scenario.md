# Clawford Tier-2 Exam: huawei-cloud-dms-list

You are taking an agent-native verification exam for skill `huawei-cloud-dms-list`.
1. List Huawei Cloud DMS (Distributed Message Service) instances in a tenant region through KooCLI — Kafka via `hcloud Kafka ListInstances` and RabbitMQ via `hcloud RabbitMQ ListInstancesDetails` (both read-only GET /v2/{project_id}/instances) — with an automatic fallback to the official huaweicloudsdkkafka / huaweicloudsdkrabbitmq v2 SDKs when hcloud is not installed. 2. Default output is the compact instance-name list (名称列表, also available via --names-only); --table renders the full-field table (实例ID/名称/引擎/版本/规格/状态/节点数/存储空间/创建时间/VPC/子网/连接地址, missing values shown as "-"), and --json outputs the raw instance array. 3. Supports --engine kafka|rabbitmq|all (default all, both engines), region / project override, --limit / --offset paging with automatic page fetching, and the real server-side filters --name / --name-equal / --instance-id / --status / --enterprise-project-id. 4. Explicit error hints for empty instance lists (「当前区域（x）无 DMS 实例」), 403 / insufficient IAM permission, missing or invalid AK/SK credentials, missing project_id on the SDK fallback, missing hcloud, and KooCLI [USE_ERROR] usage failures (all non-zero exit). 5. Built-in write-intent guard: any mutating intent (create / delete / resize / restart / flush / clear / restore / backup / freeze / migrate) or any operation other than the two read-only list operations is rejected before execution — this skill is strictly read-only, every request is a GET. 6. Triggers include: "list DMS instances", "DMS instance list", "查询 DMS 实例 列表", "DMS 实例列表", "Kafka 实例列表", "RabbitMQ 实例列表", "消息实例列表", "DMS inventory", "list kafka instances", "华为云 DMS 列表". 7. Offline unit tests (mocked hcloud subprocess + fake SDK clients) cover the output modes, filters, paging, error scenarios, SDK fallback and the write-intent guard.

## Task

Use `huawei-cloud-dms-list` to execute an API-oriented workflow and persist a reproducible artifact of request/response outcomes.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce workspace artifacts that demonstrate request intent, response validation, and final outcome.
- Keep total runtime steps efficient.
