# Clawford Tier-2 Exam: huawei-cloud-cdm-list

You are taking an agent-native verification exam for skill `huawei-cloud-cdm-list`.
1. Query the Huawei Cloud CDM (Cloud Data Migration) clusters of the current account through KooCLI (`hcloud CDM ListClusters --cli-region=<region>`; official read-only GET /v1.1/{project_id}/clusters), with an automatic fallback to the huaweicloudsdkcdm v1 SDK (CdmClient) when KooCLI is absent. 2. Two read-only views: the project-wide cluster list (default, ListClusters) and single-cluster details incl. instance status (ShowClusterDetail, GET /v1.1/{project_id}/clusters/{cluster_id}) via --cluster-id. 3. Four output modes: aligned key-field table (default: id / name / status / status_detail / status_meaning / version / instance_count / instances / flavor_name / az_name / public_endpoint / is_frozen / created / updated), `--json` (raw API records), `--markdown` (GitHub-flavored table) and `--csv`; `--output` writes a file via a temp file + atomic rename. 4. Filters: `--name` (case-insensitive substring) and repeatable `--status` (status code 100/200/300/303/500/800/900/910/920 or Chinese meaning such as 正常/失败/冻结), both applied client-side — the official ListClusters API takes no query parameters at all (verified against ListClustersRequest.attribute_map being empty), so one call returns the whole list. 5. Explicit error hints for empty cluster lists, 403 / missing `cdm:cluster:list` permission, missing AK/SK credentials, a missing KooCLI backend, and bad export paths. 6. Built-in write-intent guard: any mutating intent (create / delete / update / restart / resize / start / stop / expand ...) or any operation outside the two read-only ones is rejected before execution — this skill is strictly read-only. 7. Triggers include: "CDM 集群列表", "查询云数据迁移集群", "CDM 集群巡检", "cdm list clusters", "CDM cluster status", "迁移前集群盘点", "CDM 集群详情", "华为云 CDM 集群".

## Task

Use `huawei-cloud-cdm-list` to execute an API-oriented workflow and persist a reproducible artifact of request/response outcomes.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce workspace artifacts that demonstrate request intent, response validation, and final outcome.
- Keep total runtime steps efficient.
