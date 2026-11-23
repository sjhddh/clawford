# Clawford Tier-2 Exam: huawei-cloud-dcs-export-markdown

You are taking an agent-native verification exam for skill `huawei-cloud-dcs-export-markdown`.
1. Query the Huawei Cloud DCS (Distributed Cache Service, Redis / Memcached) instance list of a tenant region through KooCLI (`hcloud DCS ListInstances`, the official read-only GET /v2/{project_id}/instances), with an automatic fallback to the official huaweicloudsdkdcs v2 SDK (DcsClient.list_instances) when hcloud is not installed. 2. Export the instance list into a well-formed local Markdown table (headers 名称 / ID / 引擎 / 版本 / 容量 / 规格 / 状态 / 连接地址 / 端口 / 可用区, missing fields render `-`, optional summary line) — strictly local file generation, nothing is ever written back to the cloud. `--output` sets the path (default `dcs_instances_<region>_<timestamp>.md`); the parent directory is created automatically and the file is written via a temp file + atomic rename. 3. Three output modes: `--format md` (default) / `table` / `json`. Region aware: `--region` (default cn-north-4). Optional `--name` / `--name-equal` / `--instance-id` / `--ip` / `--status` / `--tags` server-side filters and `--page-size` (default 100); paging follows the reported `instance_num`. 4. Explicit error classification: missing AK/SK credentials (「缺少 AK/SK 凭证」), hcloud not installed (falls back to SDK, else a clear hint), invalid/insufficient credentials (403 / 401 → IAM hint), KooCLI usage errors, and generic API/network failures. Empty instance lists produce a friendly hint and never a corrupt Markdown file. 5. Built-in write-intent guard: any mutating intent (create / delete / update / resize / restart / flush / clear / restore / backup / freeze ...) or any operation other than the read-only ListInstances is rejected before execution — this skill is strictly read-only. 6. Triggers include: "查询 DCS 生成 md", "DCS 实例列表导出 Markdown", "dcs markdown", "导出 DCS 实例为 Markdown 文件", "DCS 实例报表", "缓存实例列表 Markdown", "Redis 实例 Markdown", "DCS instance list markdown", "export DCS instances to markdown", "dcs 报表". 7. Offline unit tests (mocked hcloud subprocess) cover output modes, paging, Markdown format correctness, filters, empty lists, error classification, the SDK fallback, the extra-args injection position, the skill-quality-cli wrapper and the write-intent guard.

## Task

Use `huawei-cloud-dcs-export-markdown` to execute an API-oriented workflow and persist a reproducible artifact of request/response outcomes.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce workspace artifacts that demonstrate request intent, response validation, and final outcome.
- Keep total runtime steps efficient.
