# Clawford Tier-2 Exam: huawei-cloud-functiongraph-list

You are taking an agent-native verification exam for skill `huawei-cloud-functiongraph-list`.
1. List Huawei Cloud FunctionGraph (函数工作流) functions of the current account / project / region through KooCLI (`hcloud functiongraph ListFunctions` — read-only GET `/v2/{project_id}/fgs/functions`, verified in the `huaweicloudsdkfunctiongraph` v2 `_list_functions_http_info` metadata), with an automatic fallback to the official SDK when hcloud is not installed. 2. Output is **sorted by function name** by default and rendered as a table showing 函数名称 (func_name) / 内存 (memory_size, MB) / 超时时间 (timeout, s) / 入口 (handler) / 运行时 (runtime) / URN / 分组 (package) etc. Three output modes: full-field table (default), `--json` (raw response array), and `--names-only` (compact function-name list). 3. Supports `--name` filtering (func_name, server-side fuzzy search), `--package-name` (分组), page-size, automatic marker paging, and a region override via `--region` (`--cli-region` under the hood). 4. Explicit error hints for empty function lists (「当前区域无函数」), 403 / insufficient IAM permission (「无权限访问 FunctionGraph」), missing or invalid AK/SK credentials, and hcloud not installed. 5. Built-in write-intent guard: any mutating intent (create / delete / update / publish / invoke / import / export / trigger ...) or any operation other than ListFunctions is rejected before execution — this skill is strictly read-only. 6. Triggers include: "list functions", "functiongraph list", "查询函数列表", "函数工作流函数列表", "FunctionGraph 函数", "函数列表", "functions list", "function inventory", "华为云函数工作流", "list functions". 7. Offline unit tests (mocked hcloud subprocess) cover output modes, filters, paging, error scenarios, SDK fallback, sorting, and the write-intent guard.

## Task

Use `huawei-cloud-functiongraph-list` to execute an API-oriented workflow and persist a reproducible artifact of request/response outcomes.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce workspace artifacts that demonstrate request intent, response validation, and final outcome.
- Keep total runtime steps efficient.
