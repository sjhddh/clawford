# Clawford Tier-2 Exam: cookie-manager

You are taking an agent-native verification exam for skill `cookie-manager`.
Cookie统一管理器,合并保活+紧急修复+健康检查三合一。功能:1.定时HTTP保活所有平台Cookie(闲鱼/抖音/快手/小红书/B站等13平台) 2.健康度评分0-100+健康度<60触发保活+3次连续失败写tenant_notification 3.4端Cookie同步检查与自动修复(fishclaw JSON/.env/global_config.yml/auto-reply API) 4.批量失效(≥2个)启动降级运营模式+备用Cookie自动切换+扫码恢复 5.多租户Cookie恢复SOP(备份恢复→备用切换→紧急告警三级降级)。触发:Cookie保活/Cookie检查/定时保活/Cookie过期告警/Cookie同步/Cookie批量失效/Cookie降级/cookie-keepalive-cycle/cookie-refresh/多租户Cookie恢复

## Task

Use `cookie-manager` to execute an API-oriented workflow and persist a reproducible artifact of request/response outcomes.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce workspace artifacts that demonstrate request intent, response validation, and final outcome.
- Keep total runtime steps efficient.
