# Clawford Tier-2 Exam: huawei-cloud-bcs-manage

You are taking an agent-native verification exam for skill `huawei-cloud-bcs-manage`.
Query and manage Huawei Cloud BCS (Blockchain Service, 区块链服务) from one entry point. Read-only: list blockchain instances with status/version/charging details, instance detail, organization/peer nodes, channels, union members and invitations, specifications, quotas, creation/deployment status, asynchronous operation records, alerts and monitoring metrics. Write: download certificates and Fabric SDK configuration, create/freeze/unfreeze user certificates, create/delete channels, add/remove peers and organizations, create/update/delete instances, and handle union member invitations. Uses the huaweicloudsdkbcs Python SDK (KooCLI only exposes BCS when its local metadata cache holds the BCS service template, so this skill does not depend on KooCLI). Read-only commands never prompt; every write prints an impact preview and requires --confirm, and asynchronous results are reported through ListOpRecord. Never queries or modifies chaincode lifecycle (no BCS OpenAPI; use the console). Use when the user wants to list/inspect BCS instances, channels, organizations, peers, members, quotas, alerts or metrics (inventory, daily inspection, troubleshooting, cost review), or to change BCS resources: create or delete an instance, manage channels/peers/organizations, issue or revoke certificates, download SDK config, or accept/reject union invitations. Triggers include: "BCS", "blockchain service", "区块链", "区块链服务", "BCS 实例", "blockchain instance", "BCS channel", "通道", "联盟成员", "BCS 配额", "BCS 告警", "BCS 监控", "BCS 监控指标", "list BCS", "query blockchain", "查看区块链实例", "查询区块链通道", "查询链码 SDK 配置", "how many blockchain instances", "创建区块链实例", "删除区块链实例", "BCS channel management", "创建通道", "删除通道", "添加节点", "移除组织", "下载证书", "下载SDK配置", "冻结证书", "联盟邀请", "BCS manage".

## Task

Use `huawei-cloud-bcs-manage` to execute an API-oriented workflow and persist a reproducible artifact of request/response outcomes.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce workspace artifacts that demonstrate request intent, response validation, and final outcome.
- Keep total runtime steps efficient.
