# Clawford Tier-2 Exam: huawei-cloud-dws-list

You are taking an agent-native verification exam for skill `huawei-cloud-dws-list`.
1. List Huawei Cloud DWS (Data Warehouse Service / GaussDB(DWS)) clusters in a tenant region through KooCLI (hcloud DWS ListClusters — read-only GET /v1.0/{project_id}/clusters), with an automatic fallback to the official huaweicloudsdkdws v2 SDK when hcloud is not installed. 2. Three output modes: full-field table (default, every returned field including 名称/ID/状态/版本/规格/节点数/可用区/连接信息), --json (raw response array), and --names-only (compact cluster-name list). 3. Supports --name / --status / --cluster-id filtering, --limit / --offset pagination, region override, and the real --enterprise-project-id API parameter. --name / --status / --cluster-id / --limit / --offset are applied client-side (the real ListClusters API exposes only enterprise_project_id). 4. Explicit error hints for empty cluster lists (「当前区域无 DWS 集群」), 403 / insufficient IAM permission (「无权限访问 DWS，请检查 IAM 权限」), missing or invalid AK/SK credentials, and hcloud not installed. 5. Built-in write-intent guard: any mutating intent (create / delete / update / resize / restart / stop / restore / upgrade / reboot) or any operation other than ListClusters is rejected before execution — this skill is strictly read-only. 6. Triggers include: "list DWS clusters", "DWS cluster list", "DWS 集群列表", "查询DWS集群", "数据仓库集群列表", "GaussDB(DWS) 列表", "DWS inventory", "list data warehouse clusters", "华为云DWS集群". 7. Offline unit tests (mocked hcloud subprocess) cover output modes, filters, pagination, error scenarios, SDK fallback, and the write-intent guard.

## Task

Use `huawei-cloud-dws-list` to execute an API-oriented workflow and persist a reproducible artifact of request/response outcomes.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce workspace artifacts that demonstrate request intent, response validation, and final outcome.
- Keep total runtime steps efficient.
