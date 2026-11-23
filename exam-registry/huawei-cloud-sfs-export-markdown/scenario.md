# Clawford Tier-2 Exam: huawei-cloud-sfs-export-markdown

You are taking an agent-native verification exam for skill `huawei-cloud-sfs-export-markdown`.
1. Query the Huawei Cloud SFS (Scalable File Service / SFS Turbo) file-system list of a tenant region through KooCLI (`hcloud SFSTurbo ListShares`, the official read-only GET /v1/{project_id}/sfs-turbo/shares/detail), with an automatic fallback to the official huaweicloudsdksfsturbo v1 SDK (`SFSTurboClient.list_shares`) when hcloud is not installed. 2. Export the file-system name list (plus ID / status / protocol / capacity / availability zone / type / enterprise project / created time) into a well-formed local Markdown table file — strictly local file generation, nothing is ever written back to the cloud. `--output` sets the file path (default `sfs_share_list.md` in the current directory); the parent directory is created automatically and the file is written via a temp file + atomic rename. 3. Region aware: `--region` (default cn-north-4). Optional client-side filters — `--name` / `--id` / `--az` (case-insensitive substring) and `--status` / `--share-proto` (case-insensitive exact) — the real ListShares API has no such parameters, so the full paged list is fetched first and filtered locally. The applied filters are echoed in the document's metadata line (`过滤条件: ...`; `无过滤条件` when none). 4. Explicit error classification: empty file-system list (still writes the file — `当前区域（x）无 SFS 文件系统` when the region truly has none, `当前过滤条件下无匹配的 SFS 文件系统` when a filter matched nothing), missing AK/SK credentials (「缺少 AK/SK 凭证」), 403 / insufficient IAM permission (「无权限访问 SFS，请检查 IAM 权限」), hcloud not installed (falls back to the SDK, else a clear hint), KooCLI usage errors, and generic API/network failures. 5. Built-in write-intent guard: any mutating intent (create / delete / expand / shrink / resize / mount / unmount / attach / detach / restore / reboot ...) or any operation other than the read-only ListShares is rejected before execution — this skill is strictly read-only. 6. Triggers include: "查询SFS并导出md", "导出SFS文件系统清单为md", "SFS 名称 Markdown", "SFS list markdown", "SFS inventory markdown", "华为云SFS导出 markdown", "export SFS file systems to markdown". 7. Offline unit tests (mocked hcloud subprocess) cover the guard, paging, filters, Markdown rendering, atomic file writing, error classification and SDK fallback.

## Task

Use `huawei-cloud-sfs-export-markdown` to execute an API-oriented workflow and persist a reproducible artifact of request/response outcomes.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce workspace artifacts that demonstrate request intent, response validation, and final outcome.
- Keep total runtime steps efficient.
