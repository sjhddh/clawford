# Clawford Tier-2 Exam: huawei-cloud-sfs-list

You are taking an agent-native verification exam for skill `huawei-cloud-sfs-list`.
1. List Huawei Cloud SFS (Scalable File Service) file systems in a tenant region through KooCLI (`hcloud SFS ListShares` — read-only), with an automatic fallback to the official huaweicloudsdksfsturbo v1 SDK (SFSTurboClient.list_shares) when hcloud is not installed. 2. Output modes: full-field aligned table (default, every returned field including 名称/ID/状态/协议/容量/可用区/类型/企业项目), --json (raw response array) and --names-only (compact file-system name + ID inventory). 3. Supports --region (default cn-north-4), --page-size with automatic limit/offset paging, and client-side --name / --id / --status / --share-proto filtering (the SFS ListShares request itself only accepts limit/offset). 4. Explicit error hints for empty file-system lists (「当前区域无 SFS 文件 系统」), 403 / insufficient IAM permission (「无权限访问 SFS，请检查 IAM 权限」), missing or invalid AK/SK credentials, hcloud not installed, and KooCLI usage errors. 5. Built-in write-intent guard: any mutating intent (create / delete / expand / shrink / resize / mount / unmount / attach / detach / restore / reboot ...) or any operation other than the read-only ListShares is rejected before execution — this skill is strictly read-only. 6. Triggers include: "list SFS file systems", "SFS file system list", "SFS 文件系统列表", "查询SFS文件系统", "查询文件系统列表", "SFS Turbo 列表", "文件存储列表", "SFS inventory", "list file systems", "华为云SFS列表". 7. Offline unit tests (mocked hcloud subprocess) cover output modes, filters, paging, error scenarios, SDK fallback and the write-intent guard.

## Task

Use `huawei-cloud-sfs-list` to execute an API-oriented workflow and persist a reproducible artifact of request/response outcomes.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce workspace artifacts that demonstrate request intent, response validation, and final outcome.
- Keep total runtime steps efficient.
