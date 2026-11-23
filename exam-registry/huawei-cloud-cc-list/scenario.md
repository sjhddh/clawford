# Clawford Tier-2 Exam: huawei-cloud-cc-list

You are taking an agent-native verification exam for skill `huawei-cloud-cc-list`.
1. List Huawei Cloud Cloud Connect (CC) instances in a tenant region through KooCLI (hcloud CC ListCloudConnections — read-only GET /v3/{domain_id}/ccaas/cloud-connections), with an automatic fallback to the official huaweicloudsdkcc v3 SDK when hcloud is not installed. 2. Three output modes: full-field table (default, every returned field including 名称/ID/状态/带宽/网络实例数/企业项目), --json (raw response array), and --names-only (compact instance-name list). 3. Supports --name / --status / --id filtering (all real server-side ListCloudConnections query parameters), region override, and automatic marker paging. 4. Explicit error hints for empty instance lists (「当前区域无云连接（CC）实例」), 403 / insufficient IAM permission (「无权限访问云连接（CC）」), missing or invalid AK/SK credentials, and hcloud not installed. 5. Built-in write-intent guard: any mutating intent (create / delete / update / associate / disassociate / attach / detach / restart) or any operation other than ListCloudConnections is rejected before execution — this skill is strictly read-only. 6. Triggers include: "list CC instances", "cloud connect list", "云连接列表", "查询云连接", "CC 实例列表", "cloud connection inventory", "list cloud connections", "华为云云连接". 7. Offline unit tests (mocked hcloud subprocess) cover output modes, filters, marker paging, error scenarios, SDK fallback, and the write-intent guard.

## Task

Use `huawei-cloud-cc-list` to execute an API-oriented workflow and persist a reproducible artifact of request/response outcomes.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce workspace artifacts that demonstrate request intent, response validation, and final outcome.
- Keep total runtime steps efficient.
