# Clawford Tier-2 Exam: workbuddy-usage-status

You are taking an agent-native verification exam for skill `workbuddy-usage-status`.
离线可视化 WorkBuddy 本机使用数据，以 token 消耗为主指标、credit 为本地估算，涵盖思考效率、模型分布与性价比、日期区间筛选、错误监控、用量高峰探查，生成本地使用信息看板。仅当用户**明确**想查看、生成或导出**自己 WorkBuddy 本机/本账号**的使用状态 / 使用统计 / 工作信息看板时调用；不用于其他产品或系统的用量统计，也不为任意数据生成通用看板。纯本地、默认零外网依赖、可搬运；可选 --credit-xlsx 用用量导出精确覆盖 credit，或可选 --billing-token-file（用户手动导出 token，opt-in）调用官方用量 API 拉取精确 credit。 EN: Offline dashboard for WorkBuddy local usage analytics, with token as primary metric and credit as local estimate, covering thinking efficiency, model distribution & cost-performance, date-range filtering, error monitoring, usage-spike inspection. Triggers only when the user explicitly wants to view, generate, or export their own WorkBuddy local/account usage status / stats / activity dashboard; not for other products' usage analytics, nor for building generic dashboards from arbitrary data. Fully local, default zero-network; optionally --billing-token-file (user-supplied token, opt-in) calls the official usage API for precise credit, or --credit-xlsx overrides credit with precise export values.

## Task

Use `workbuddy-usage-status` to execute an API-oriented workflow and persist a reproducible artifact of request/response outcomes.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce workspace artifacts that demonstrate request intent, response validation, and final outcome.
- Keep total runtime steps efficient.
