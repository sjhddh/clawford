# Clawford Tier-2 Exam: huawei-cloud-er-list

You are taking an agent-native verification exam for skill `huawei-cloud-er-list`.
1. Read-only inventory of Huawei Cloud Enterprise Router (ER) resources through KooCLI: enterprise routers (hcloud ER ListEnterpriseRouters — GET /v3/{project_id}/enterprise-router/instances), VPC attachments (hcloud ER ListVpcAttachments — GET /v3/{project_id}/enterprise-router/{er_id}/vpc-attachments), route tables (hcloud ER ListRouteTables — GET /v3/{project_id}/enterprise-router/{er_id}/route-tables) and single-ER detail (hcloud ER ShowEnterpriseRouter — GET /v3/{project_id}/enterprise-router/instances/{er_id}), with an automatic fallback to the official huaweicloudsdker v3 SDK when hcloud is missing. 2. `--resource {er,attachment,route-table,detail}` selects the view (default `er`); attachment / route-table / detail require `--er-id`. 3. Output modes: compact list (default), fixed-column table (`--table`: ER 8 columns / VPC attachment 6 columns / route table 6 columns) and `--json` (raw response fields). 4. Non-`available` enterprise routers / attachments are rendered in a separate, explicitly flagged `[!]` / `[异常]` section instead of being mixed with healthy resources. 5. Filters: local `--name` (exact) and `--fuzzy` (case-insensitive), plus server-side `--er-id` / `--state` / `--owned-by-self` / `--enterprise-project-id` / `--vpc-id` / `--sort-key` / `--sort-dir`; region defaults to `cn-north-4`; `--page-size`/`--limit` is 1–2000 with automatic `page_info.next_marker` paging. 6. Built-in write-intent guard: Create / Delete / Update / Associate / Disassociate / Enable / Disable / Accept / Reject and any non-whitelisted operation are rejected before execution (exit 1) — this skill is strictly read-only. 7. Explicit hints for empty lists, 403 / insufficient IAM permission, missing or invalid AK/SK, missing project_id on the SDK fallback, invalid `--er-id` (not found), network failures and hcloud not installed. 8. Triggers include: "list enterprise routers", "er list", "企业路由器列表", "查询企业路由器", "ER 实例列表", "VPC 连接列表", "ER VPC 连接", "ER 路由表", "企业路由器详情", "er inventory", "list vpc attachments", "list route tables", "华为云 ER", "企业路由器下钻". 9. Offline unit tests (mocked hcloud subprocess + fake SDK) cover output modes, filters, paging, error scenarios, SDK fallback, abnormal-state separation and the write-intent guard.

## Task

Use `huawei-cloud-er-list` to run an operations workflow with safety checks, then verify final state with operational evidence.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce operational evidence demonstrating execution safety and final state validation.
- Keep total runtime steps efficient.
