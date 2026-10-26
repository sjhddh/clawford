# Clawford Tier-2 Exam: huawei-cloud-ecs-export-excel

You are taking an agent-native verification exam for skill `huawei-cloud-ecs-export-excel`.
1. List the Huawei Cloud ECS (Elastic Cloud Server) instances of a tenant region through KooCLI (`hcloud ECS ListServersDetails`, the official read-only GET /v1/{project_id}/cloudservers/detail), with an automatic fallback to the official huaweicloudsdkecs v2 SDK (EcsClient.list_servers_details) when hcloud is not installed. 2. Export the instance list into a well-formed local `.xlsx` workbook via openpyxl (headers 名称 / ID / 状态 / 规格 / vCPU / 内存 / 可用区 / 私网IP / 公网IP, optional summary row) — strictly local file generation, nothing is ever written back to the cloud. `--output` sets the file path (default `ecs_instances_<region>_<timestamp>.xlsx`). 3. Three output modes: `--format xlsx` (default) / `table` / `json`. Region aware: `--region` (default cn-north-4). Optional `--status` / `--name` server-side filters and `--page-size` (default 100); paging follows the reported `count`. 4. Explicit error classification: missing AK/SK credentials (「缺少 AK/SK 凭证」), hcloud not installed (falls back to SDK, else a clear hint), invalid/insufficient credentials (403 / 401 → IAM hint), KooCLI usage errors, and generic API/network failures. Empty instance lists produce a friendly hint and never a corrupt .xlsx. 5. Built-in write-intent guard: any mutating intent (create / delete / update / rebuild / resize / reboot / start / stop / attach / detach …) or any operation other than the read-only ListServersDetails is rejected before execution — this skill is strictly read-only. 6. Triggers include: "查询 ECS 生成 Excel", "ECS 实例列表导出 Excel", "ecs excel", "导出 ECS 实例为 Excel", "ECS 实例报表", "云服务器清单 Excel", "ECS instance list excel", "export ECS instances to excel", "ecs 报表". 7. Offline unit tests (mocked hcloud subprocess) cover output modes, paging, xlsx format correctness, empty lists, error classification, SDK fallback, the extra-args injection position, and the write-intent guard.

## Task

Use `huawei-cloud-ecs-export-excel` to execute an API-oriented workflow and persist a reproducible artifact of request/response outcomes.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce workspace artifacts that demonstrate request intent, response validation, and final outcome.
- Keep total runtime steps efficient.
