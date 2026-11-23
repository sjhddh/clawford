# Clawford Tier-2 Exam: huawei-cloud-gaussdb-list

You are taking an agent-native verification exam for skill `huawei-cloud-gaussdb-list`.
1. List Huawei Cloud GaussDB (云数据库 GaussDB for MySQL) instances in a tenant region through KooCLI (`hcloud GaussDB ListGaussMySqlInstances`, the official read-only GET /v3/{project_id}/instances), with an automatic fallback to the official `huaweicloudsdkgaussdb` v3 SDK (`GaussDBClient.list_gauss_my_sql_instances`) when KooCLI is not installed. 2. Default output is an aligned Chinese-header table (名称/实例ID/状态/引擎/引擎版本/规格/CPU内存/存储类型/存储/私网IP/公网IP/ 端口/类型/区域/VPC/子网/创建时间); `--json` prints the raw instance array; `--format md` / `-o FILE` exports the same fields as a Markdown table file (default `gaussdb_instances_<region>_<timestamp>.md`). 3. Supports `--region` override (default cn-north-4), `--name` server-side fuzzy filtering (a leading `*` is added when missing), `--status` client-side exact filtering (the real API has no status parameter), and automatic `limit`/`offset` paging until the reported total is reached. 4. Ambiguous / empty results are explained explicitly: 「当前区域（<x>）无 GaussDB 实例」, 403 / insufficient IAM permission, missing AK/SK credentials, and network / API failures. 5. Built-in write-intent guard: any mutating intent (create / delete / update / resize / restart / stop / backup / restore / bind / unbind ...) or any operation other than `ListGaussMySqlInstances` is rejected before a single command runs — this skill is strictly read-only. 6. Triggers include: "查询 GaussDB 实例列表", "GaussDB 实例列表", "GaussDB inventory", "list GaussDB instances", "华为云 GaussDB 实例", "GaussDB MySQL 实例清单", "查询云数据库 GaussDB 实例", "GaussDB list".

## Task

Use `huawei-cloud-gaussdb-list` to execute an API-oriented workflow and persist a reproducible artifact of request/response outcomes.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce workspace artifacts that demonstrate request intent, response validation, and final outcome.
- Keep total runtime steps efficient.
