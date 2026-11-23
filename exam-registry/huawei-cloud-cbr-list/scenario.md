# Clawford Tier-2 Exam: huawei-cloud-cbr-list

You are taking an agent-native verification exam for skill `huawei-cloud-cbr-list`.
1. List Huawei Cloud CBR (Cloud Backup and Recovery) backups in a tenant region through KooCLI (`hcloud CBR ListBackups --cli-region=<region>` — read-only), with an automatic fallback to the official huaweicloudsdkcbr v1 SDK (CbrClient.list_backups) when hcloud is not installed. 2. Output modes: full-field aligned table (default, every returned field including 名称/ID/状态/所属资源/资源类型/vault_id/创建时间), --json (raw response array) and --names-only (compact backup name + ID inventory). 3. Supports --region (default cn-north-4), --page-size with automatic limit/offset paging, and the native ListBackups filters --name / --status / --resource_id / --resource_name / --resource_type / --vault_id / --image_type (with a client-side re-filter for the rendered rows). 4. Explicit error hints for empty backup lists (「当前区域无 CBR 备份」), 403 / insufficient IAM permission (「无权限访问 CBR，请检查 IAM 权限」), missing or invalid AK/SK credentials, hcloud not installed, and KooCLI usage errors. 5. Built-in write-intent guard: any mutating intent (create / delete / restore / copy / import / replicate / update / migrate / associate / bind / ...) or any operation other than the read-only ListBackups is rejected before execution — this skill is strictly read-only. 6. Triggers include: "list CBR backups", "CBR backup list", "CBR 备份列表", "查询CBR备份", "查询备份列表", "云备份列表", "备份清单查询", "备份资源巡检", "备份容量盘点", "CBR inventory", "list backups", "华为云备份查询", "华为云CBR列表". 7. Offline unit tests (mocked hcloud subprocess) cover output modes, filters, paging, error scenarios, SDK fallback and the write-intent guard.

## Task

Use `huawei-cloud-cbr-list` to execute an API-oriented workflow and persist a reproducible artifact of request/response outcomes.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce workspace artifacts that demonstrate request intent, response validation, and final outcome.
- Keep total runtime steps efficient.
