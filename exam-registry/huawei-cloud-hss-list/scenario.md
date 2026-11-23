# Clawford Tier-2 Exam: huawei-cloud-hss-list

You are taking an agent-native verification exam for skill `huawei-cloud-hss-list`.
1. List Huawei Cloud HSS (主机安全服务 / Host Security Service) protected servers in a tenant region through KooCLI (hcloud HSS ListHostStatus — read-only GET /v5/{project_id}/host-management/hosts), with an automatic fallback to the official `huaweicloudsdkhss` v5 SDK when hcloud is not installed. 2. Outputs the full-field host protection table (default) with host name, private/public IP, OS, host status, Agent online/offline status, enabled HSS edition (基础版/专业版/企业版/旗舰版...), protection status (opened/closed), risk detection result, server group and enterprise project. 3. Supports --region override and readable modes --json (raw response array) and --names-only (compact host-name list). 4. Supports real server-side filters: --host-name / --host-id / --agent-status / --host-status / --protect-status / --os-type / --ip-addr / --version / --enterprise-project-id, plus automatic offset paging (limit 10–200). 5. Explicit error hints for empty lists (「当前区域无已接入 HSS 的服务器」), 403 / insufficient IAM permission (「无权限访问主机安全服务（HSS）」), missing or invalid AK/SK credentials, missing project_id on the SDK fallback, and hcloud not installed. 6. Built-in write-intent guard: any mutating intent (create / delete / update / install agent / change / isolate...) or any operation other than ListHostStatus is rejected before execution — this skill is strictly read-only. 7. Triggers include: "list HSS hosts", "HSS 主机列表", "主机防护列表", "查询 HSS", "主机安全", "Agent 状态", "防护状态", "hss host list", "已接入 HSS 的服务器", "华为云 HSS", "host security list", "list protected hosts", "quota 主机列表", "HSS 资产". 8. Offline unit tests (mocked hcloud subprocess) cover output modes, filters, offset paging, error scenarios, SDK fallback, and the write-intent guard.

## Task

Use `huawei-cloud-hss-list` to run an operations workflow with safety checks, then verify final state with operational evidence.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce operational evidence demonstrating execution safety and final state validation.
- Keep total runtime steps efficient.
