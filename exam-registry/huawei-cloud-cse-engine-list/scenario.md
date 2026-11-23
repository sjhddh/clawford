# Clawford Tier-2 Exam: huawei-cloud-cse-engine-list

You are taking an agent-native verification exam for skill `huawei-cloud-cse-engine-list`.
1. Read-only inventory of Huawei Cloud CSE microservice engines in a tenant region through KooCLI: `hcloud CSE ListEngines` (GET /v2/{project_id}/enginemgr/engines). Returns name / ID / type / version / status / flavor / instance counts / creation time / region. 2. Automatic fallback to the official Python SDK `huaweicloudsdkcse` (`CseClient.list_engines`, the v1 SDK module that wraps the same v2 REST API) when the hcloud binary is not installed. 3. Filtering: `--type` server-side (ALL / CSE / Nacos / MicroGateway), `--name` client-side exact match, `--fuzzy` client-side substring match, `--region` override (default cn-north-4), optional `--project-id`. 4. Three output modes: concise inventory (default), `--table` full-field table, and `--json` normalized items. 5. `total`-driven paging: every page is fetched until the reported total is reached (with a full-page fallback when `total` is absent). 6. Empty list prints 「未找到微服务引擎」and exits 0. 7. Explicit error hints for 403 / insufficient IAM permission (`cse:engine:list`), missing or invalid AK/SK, KooCLI `[USE_ERROR]` parameter errors, and network failures — never a traceback. 8. Built-in write-intent guard: any mutating intent (create / delete / update / upgrade / modify / remove / start / stop / resize ...) is rejected before execution — strictly read-only. 9. Offline unit tests (mocked hcloud + fake SDK) cover filtering, paging, output modes, error classification, SDK fallback and the guard. 10. Triggers include: "CSE 微服务引擎列表", "查询CSE引擎", "微服务引擎盘点", "CSE引擎版本核查", "Nacos引擎列表", "网关引擎列表", "ListEngines", "CSE engine inventory", "list CSE engines", "华为云CSE引擎".

## Task

Use `huawei-cloud-cse-engine-list` to execute an API-oriented workflow and persist a reproducible artifact of request/response outcomes.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce workspace artifacts that demonstrate request intent, response validation, and final outcome.
- Keep total runtime steps efficient.
