# Clawford Tier-2 Exam: huawei-cloud-cdn-universal-query

You are taking an agent-native verification exam for skill `huawei-cloud-cdn-universal-query`.
Comprehensive CDN query reference skill using hcloud CLI. Covers all 44 GET read-only CDN APIs organized by category: domain management, statistics & analytics, refresh/log/export, template/rule/tag/account. Provides command templates, parameter guidance, and validated pitfalls for any CDN query scenario. **This is a fallback skill for CDN queries. Use this when other CDN-specific skills (cdn-traffic-anomaly-analysis, cdn-502-troubleshooting, etc.) are not applicable.** **Do NOT use this skill for:** write/modify/delete CDN operations (POST/PUT/DELETE are always refused), non-CDN cloud service queries, or scenarios already covered by a dedicated CDN skill (e.g., cdn-traffic-anomaly-analysis, cdn-502-troubleshooting). Use this skill when the user wants to: (1) query CDN domain configuration, (2) check domain statistics or traffic data, (3) view refresh/preheat task history, (4) download CDN logs or export reports, (5) inspect CDN templates, rules, tags, or account quotas, (6) diagnose DNS, certificates, origin, or domain ownership, (7) look up any CDN hcloud CLI command usage. Triggers include: CDN查询, CDN接口, CDN CLI, 域名查询, 域名配置, 流量统计, 带宽查询, 刷新预热, 日志下载, 证书查询, 回源配置, 缓存规则, 域名归属, CDN query, CDN API reference, CDN CLI usage, domain config, traffic statistics, bandwidth query, refresh preheat, log download, certificate query, origin config

## Task

Use `huawei-cloud-cdn-universal-query` to execute an API-oriented workflow and persist a reproducible artifact of request/response outcomes.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce workspace artifacts that demonstrate request intent, response validation, and final outcome.
- Keep total runtime steps efficient.
