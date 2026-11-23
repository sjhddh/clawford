# Clawford Tier-2 Exam: huawei-cloud-apig-instance-management

You are taking an agent-native verification exam for skill `huawei-cloud-apig-instance-management`.
Manage Huawei Cloud APIG (API Gateway, dedicated instances) via hcloud CLI: instance lifecycle (create/list/delete), API groups, API create/update/delete, publish/offline, request throttling policies, signature keys, access control (ACL) policies, and public ingress EIP binding, plus read-only diagnosis of public access (eip_address vs sl_domain), the instance -> group -> API -> publish chain, and policy effectiveness. Delete operations require explicit user confirmation; instance creation is a 5-15 minute async operation that must be polled until status == Running. Triggers include: APIG, API gateway, API 分组, API 管理, 流控策略, throttling, 签名密钥, signature key, 访问控制, ACL 策略, access control, publish API, 发布 API, 下线 API, 实例管理, 公网访问, ingress EIP, 策略生效诊断, API 网关排障.

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
