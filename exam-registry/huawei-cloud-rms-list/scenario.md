# Clawford Tier-2 Exam: huawei-cloud-rms-list

You are taking an agent-native verification exam for skill `huawei-cloud-rms-list`.
1. Query the Huawei Cloud RMS unified resource inventory of a tenant through KooCLI (`hcloud RMS ListAllResources --cli-region=<region>`; official read-only GET /v1/resource-manager/domains/{domain_id}/all-resources), with an automatic fallback to the huaweicloudsdkrms v1 SDK when KooCLI is absent. 2. Four read-only views: account-wide resource list (default, ListAllResources), provider+type-scoped resource list (ListResources), the RMS provider / resource-type catalog (ListProviders) and the RMS region catalog (ListRegions). 3. Four output modes: aligned full-field table (default), `--json`, `--markdown` (GitHub-flavored table) and `--csv`; `--output` writes a file via a temp file + atomic rename. 4. Filters: `--provider` / `--type` / `--region-id` / `--ep-id` / `--id` / `--name` / `--tags` / `--domain-id` (all real RMS query parameters) plus automatic `marker` paging (and `offset` paging for ListProviders). 5. Explicit error hints for empty inventories, 403 / missing `rms:resources:list` permission (RMS.00010006), missing AK/SK credentials, a missing KooCLI backend, and bad export paths. 6. Built-in write-intent guard: any mutating intent (create / delete / update / enable / disable / run-query ...) or any operation outside the four read-only ones is rejected before execution — this skill is strictly read-only. 7. Triggers include: "RMS 资源清单", "查询资源管理服务资源", "统一资源视图", "rms list resources", "list all resources", "资源清单导出", "资源盘点", "RMS resources list", "华为云资源清单".

## Task

Use `huawei-cloud-rms-list` to run an operations workflow with safety checks, then verify final state with operational evidence.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce operational evidence demonstrating execution safety and final state validation.
- Keep total runtime steps efficient.
