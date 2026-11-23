# Clawford Tier-2 Exam: huawei-cloud-ecs-list

You are taking an agent-native verification exam for skill `huawei-cloud-ecs-list`.
1. List Huawei Cloud ECS (Elastic Cloud Server) instances in a tenant region through KooCLI (hcloud ECS ListServersDetails — read-only GET /v1/{project_id}/cloudservers/detail), with an automatic fallback to the official huaweicloudsdkecs v2 SDK when hcloud is not installed. 2. Output modes: full-field table (default, every returned field including 名称/ID/状态/规格(vCPU/内存)/可用区/私网IP/公网IP), --json (raw response array), and --names-only (compact instance-name + ID inventory). All output goes to stdout only — the script never writes a file. 3. Supports --status / --name server-side filtering (both are real ListServersDetails query parameters), region override, and automatic offset paging. 4. Explicit error hints for empty instance lists (「当前区域无 ECS 实例」), 403 / insufficient IAM permission (「无权限访问 ECS，请检查 IAM 权限」), missing or invalid AK/SK credentials, and hcloud not installed. 5. Built-in write-intent guard: any mutating intent (create / delete / update / rebuild / resize / reboot / start / stop / attach / detach) or any operation other than ListServersDetails is rejected before execution — this skill is strictly read-only. 6. Triggers include: "list ECS instances", "ECS instance list", "ECS 实例列表", "查询ECS实例", "云服务器列表", "ECS inventory", "list cloud servers", "华为云ECS列表". 7. Offline unit tests (mocked hcloud subprocess) cover output modes, filters, paging, error scenarios, SDK fallback, and the write-intent guard.

## Task

Use `huawei-cloud-ecs-list` to run an operations workflow with safety checks, then verify final state with operational evidence.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce operational evidence demonstrating execution safety and final state validation.
- Keep total runtime steps efficient.
