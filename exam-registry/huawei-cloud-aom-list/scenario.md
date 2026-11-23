# Clawford Tier-2 Exam: huawei-cloud-aom-list

You are taking an agent-native verification exam for skill `huawei-cloud-aom-list`.
1. Read-only Huawei Cloud **AOM (Application Operations Management)** management-plane name-list query, triggerable from natural language. 2. Lists the *names* of 12 AOM resource categories: alarm rules (告警规则), alarm rule templates (告警规则模板), metric/event alarm rules (指标/事件告警规则), event-to-alarm rules (事件告警规则), action rules (行动规则), mute rules (静默规则), dashboards (仪表盘), dashboard folders (仪表盘分组), notification templates (通知模板), Prometheus instances (Prometheus 实例), access codes (接入码) and service-discovery rules (服务发现规则). 3. Execution order: KooCLI (`hcloud AOM <Operation>`) first, then the official `huaweicloudsdkaom` v2 SDK, then a token-based REST GET fallback. A write-intent guard rejects every mutating intent before any command runs. 4. Output: a table by default (the name field first), `--json` for the full payload, or `--names-only` for names only; stdout only. 5. Explicitly OUT OF SCOPE: raw metric data points (`ListMetricItems` / `ShowMetricsData` / Prometheus `query` / `query_range`), log items (`ListLogItems`), the AOM CMDB detail lookups (`ShowAppByName` / `ShowComponentByName` / `ShowEnvByName` — no list endpoint), and every write operation. 6. Triggers include: "查询AOM名称列表", "AOM 资源名称", "查询AOM告警规则", "AOM 告警规则模板", "AOM 指标告警规则", "AOM 事件告警规则", "AOM 行动规则", "AOM 静默规则", "AOM 监控看板列表", "AOM 监控看板分组", "AOM 通知模板", "AOM Prometheus 实例", "AOM 接入码", "AOM 服务发现规则", "AOM list", "AOM alarm rules", "AOM prometheus instances", "AOM notification templates". Every trigger carries an explicit AOM qualifier so the router never confuses AOM with the sibling CES / EPS management-plane query skill, whose alarm-rule / dashboard vocabulary overlaps. 7. Offline unit tests (mocked hcloud / SDK) cover intent routing, the write-intent guard, output normalization, backend fallback and all output modes.

## Task

Use `huawei-cloud-aom-list` to execute an API-oriented workflow and persist a reproducible artifact of request/response outcomes.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce workspace artifacts that demonstrate request intent, response validation, and final outcome.
- Keep total runtime steps efficient.
