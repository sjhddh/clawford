# Clawford Tier-2 Exam: huawei-cloud-dds-list

You are taking an agent-native verification exam for skill `huawei-cloud-dds-list`.
1. List Huawei Cloud DDS (Document Database Service, 文档数据库服务) instances in a tenant region through KooCLI — `hcloud DDS ListInstances` (read-only GET /v3/{project_id}/instances) — with automatic fallbacks to the official huaweicloudsdkdds v3 SDK (`DdsClient.list_instances`) when hcloud is not installed, and then to a locally signed REST call when the SDK is missing too. 2. Default output is the compact instance-name list (名称列表, also available via --names-only); --table renders the fixed eight-column table (实例ID/名称/状态/引擎版本/规格/节点数/创建时间/模式, missing values shown as "-", 模式 shown as 集群/副本集/单节点; 规格取自 groups[].nodes[].spec_code, 节点数取自 groups[].nodes), and --json outputs the raw instance array. 3. Supports region (default cn-north-4) / project override, --limit (1~100) / --offset paging with automatic page fetching until `total_count`, and the real server-side filters --name (--fuzzy switches to *-prefix fuzzy matching) / --instance-id / --mode Sharding|ReplicaSet|Single / --datastore-type / --vpc-id / --subnet-id; --status is a client-side filter (the ListInstances API has no server-side status parameter — verified). 4. Explicit error hints for empty instance lists (「当前区域（x）无 DDS 实例」), 403 / insufficient IAM permission, missing or invalid AK/SK credentials, missing project_id on the SDK fallback, missing hcloud, and KooCLI [USE_ERROR] usage failures (all non-zero exit). 5. Built-in write-intent guard: any mutating intent (create / delete / restart / resize / backup / restore / upgrade / node add-remove ...) or any operation other than the read-only ListInstances is rejected before execution — this skill is strictly read-only, every request is a GET. 6. Triggers include: "list DDS instances", "DDS instance list", "查询 DDS 实例列表", "DDS 实例列表", "DDS实例", "文档数据库实例列表", "查询DDS实例列表", "MongoDB 实例列表", "DDS inventory", "华为云 DDS 列表", "文档数据库". 7. Offline unit tests (mocked hcloud subprocess + fake SDK clients) cover the output modes, filters, paging, error scenarios, SDK fallback and the write-intent guard.

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
