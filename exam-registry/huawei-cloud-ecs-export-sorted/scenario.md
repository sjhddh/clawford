# Clawford Tier-2 Exam: huawei-cloud-ecs-export-sorted

You are taking an agent-native verification exam for skill `huawei-cloud-ecs-export-sorted`.
1. List the Huawei Cloud ECS (Elastic Cloud Server) instances of a tenant region through KooCLI (`hcloud ECS ListServersDetails`, the official read-only GET /v1/{project_id}/cloudservers/detail), with an automatic fallback to the official huaweicloudsdkecs v2 SDK (EcsClient.list_servers_details) when hcloud is not installed. 2. Sort the fetched instances **locally** by a chosen field — name / id / status / flavor / vCPU / 内存 / availability_zone / created / privateIps / publicIps (Chinese aliases accepted) — in ascending (`--order asc`) or descending (`--order desc`) order. Numeric and timestamp fields compare natively; records with a missing/unparseable value are always placed last. 3. Export the (optionally sorted) list into a local `.xlsx` workbook (openpyxl), a UTF-8-BOM `.csv`, or structured `.json`; `--format table` prints an aligned full-field table. `--output` sets the file path. Strictly local file generation — nothing is ever written back to the cloud. 4. Region aware: `--region` (default cn-north-4); optional server-side `--status` / `--name` filters and `--page-size` (default 100); paging follows the reported `count`. 5. Explicit error classification (missing AK/SK, invalid credentials / IAM 403, KooCLI usage error, unknown sort field, export failure, network) and a built-in write-intent guard that rejects any mutating ECS intent (create / delete / update / reboot / resize / start / stop / attach / detach …) before a single command runs — this skill is strictly read-only. 6. Triggers include: "ECS 列表导出并排序", "ECS 实例排序导出", "按创建时间排序导出 ECS", "ecs sorted export", "export ECS instances sorted", "ECS 实例报表排序", "sort ecs instances csv", "云服务器清单排序导出".

## Task

Use `huawei-cloud-ecs-export-sorted` to run an operations workflow with safety checks, then verify final state with operational evidence.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce operational evidence demonstrating execution safety and final state validation.
- Keep total runtime steps efficient.
