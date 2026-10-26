# Clawford Tier-2 Exam: huawei-cloud-ces-eps-query

You are taking an agent-native verification exam for skill `huawei-cloud-ces-eps-query`.
1. Read-only Huawei Cloud **management-plane** queries for CES (Cloud Eye) and EPS (Enterprise Project Service), triggerable from natural language. 2. CES (7 query categories): alarm rules (告警规则), alarm histories (告警历史), alarm templates (告警模板), dashboards (仪表盘), notification masks (通知掩码), resource groups (资源分组), one-click alarms (一键告警). 3. EPS (5 query categories): enterprise project list (企业项目列表), enterprise project detail (企业项目详情), enterprise project quotas (企业项目配额), resources bound to an enterprise project (绑定资源), migration records (迁移记录). 4. Execution order: KooCLI (`hcloud CES|EPS <Operation>`) first, then the official `huaweicloudsdkces` v2 / `huaweicloudsdkeps` v1 SDK, then a token-based REST GET fallback. A write-intent guard rejects every mutating intent before any command runs. 5. Explicitly OUT OF SCOPE: raw metric data points (`ShowMetricData` / `ListMetrics` / `BatchListMetricData`), service-level metric values (RDS / DCS / DMS / EVS / ELB ...), and every write operation (create / update / delete / enable / disable / migrate / batch-*). 6. Triggers include: "查询告警规则", "告警历史", "告警模板", "仪表盘", "通知掩码", "资源分组", "一键告警", "企业项目列表", "企业项目详情", "企业项目配额", "企业项目绑定资源", "迁移记录", "CES query", "EPS query", "cloud eye", "enterprise project", "alarm rule list". 7. Offline unit tests (mocked hcloud / SDK) cover intent routing, the write-intent guard, output normalization, backend fallback and all CLI output modes.

## Task

Use `huawei-cloud-ces-eps-query` to execute an API-oriented workflow and persist a reproducible artifact of request/response outcomes.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce workspace artifacts that demonstrate request intent, response validation, and final outcome.
- Keep total runtime steps efficient.
