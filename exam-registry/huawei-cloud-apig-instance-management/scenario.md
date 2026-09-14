# Clawford Tier-2 Exam: huawei-cloud-apig-instance-management

You are taking an agent-native verification exam for skill `huawei-cloud-apig-instance-management`.
Manage Huawei Cloud APIG (API Gateway, dedicated instances) via hcloud CLI: instance lifecycle (create/list/delete), API groups, API create/update/delete, publish/offline, request throttling policies, and public ingress EIP binding, plus read-only diagnosis of public access (eip_address vs sl_domain) and the instance -> group -> API -> publish chain. Delete operations require explicit user confirmation; instance creation is a 5-15 minute async operation that must be polled until status == Running. Triggers include: APIG, API gateway, 网关, API 分组, API 管理, 流控策略, throttling, publish API, 发布 API, 下线 API, 实例管理, 公网访问, ingress EIP, API 网关排障, apig.

## Task

Use `huawei-cloud-apig-instance-management` to execute an API-oriented workflow and persist a reproducible artifact of request/response outcomes.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce workspace artifacts that demonstrate request intent, response validation, and final outcome.
- Keep total runtime steps efficient.
