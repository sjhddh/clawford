# Clawford Tier-2 Exam: huawei-cloud-mrs-list

You are taking an agent-native verification exam for skill `huawei-cloud-mrs-list`.
1. List Huawei Cloud MapReduce Service (MRS) clusters in a tenant region through KooCLI (hcloud MRS ListClusters — read-only GET /v1.1/{project_id}/cluster_infos). 2. Three output modes: full-field table (default, every returned field), --json (raw response array), and --names-only (compact cluster-name list). 3. Supports --cluster-state filtering (running / terminated / failed / abnormal ...), --cluster-name filtering, region override, and automatic currentPage paging. 4. Explicit error hints for empty cluster lists, 403 / insufficient IAM permission, missing or invalid AK/SK credentials, and hcloud not installed. 5. Built-in write-intent guard: any mutating intent (create / delete / update / scale / restart / terminate) or any operation other than ListClusters is rejected before execution — this skill is strictly read-only. 6. Triggers include: "list MRS clusters", "MRS cluster list", "MRS 集群列表", "查询MRS集群", "MRS inventory", "list MapReduce Service clusters", "华为云MRS列表". 7. Offline unit tests (mocked hcloud subprocess) cover output modes, filters, paging, error scenarios, and the write-intent guard.

## Task

Use `huawei-cloud-mrs-list` to execute an API-oriented workflow and persist a reproducible artifact of request/response outcomes.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce workspace artifacts that demonstrate request intent, response validation, and final outcome.
- Keep total runtime steps efficient.
