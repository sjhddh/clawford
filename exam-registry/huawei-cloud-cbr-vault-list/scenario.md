# Clawford Tier-2 Exam: huawei-cloud-cbr-vault-list

You are taking an agent-native verification exam for skill `huawei-cloud-cbr-vault-list`.
1. List Huawei Cloud CBR (Cloud Backup and Recovery) backup vaults in a tenant region through KooCLI (`hcloud CBR ListVault --cli-region=<region>` — read-only), with an automatic fallback to the official huaweicloudsdkcbr v1 SDK (CbrClient.list_vault) when hcloud is not installed. 2. Output modes: full-field aligned table (default, every returned field with 名称/ID/状态/容量/计费模式 surfaced explicitly), --json (raw response array) and --names-only (compact vault name + ID inventory). 3. Supports --region (default cn-north-4), --page-size with automatic limit/offset paging, and the native ListVault filters --name / --status / --object-type / --protect-type / --enterprise-project-id / --vault-id (with a client-side re-filter for the rendered rows). 4. Explicit error hints for empty vault lists (「当前区域无 CBR 存储库」), 403 / insufficient IAM permission (「无权限访问 CBR，请检查 IAM 权限」), missing or invalid AK/SK credentials, hcloud not installed, and KooCLI usage errors. 5. Built-in write-intent guard: any mutating intent (create / delete / update / restore / copy / migrate / bind / associate / ...) or any operation other than the read-only ListVault is rejected before execution — this skill is strictly read-only. 6. Triggers include: "list CBR vaults", "CBR vault list", "CBR 存储库列表", "查询CBR存储库", "查询备份存储库", "备份存储库列表", "云备份存储库", "存储库盘点", "备份容量盘点", "计费模式核对", "CBR inventory", "list vaults", "华为云CBR存储库", "华为云CBR列表". 7. Offline unit tests (mocked hcloud subprocess) cover output modes, filters, paging, error scenarios, SDK fallback and the write-intent guard.

## Task

Use `huawei-cloud-cbr-vault-list` to execute an API-oriented workflow and persist a reproducible artifact of request/response outcomes.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce workspace artifacts that demonstrate request intent, response validation, and final outcome.
- Keep total runtime steps efficient.
