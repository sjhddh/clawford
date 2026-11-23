# Clawford Tier-2 Exam: workbuddy-usage-status

You are taking an agent-native verification exam for skill `workbuddy-usage-status`.
离线可视化 WorkBuddy 本机使用数据，以 token 消耗为主指标、credit 为逐次实测精确值，涵盖思考效率、模型分布、成本与费率、单次提问成本、缓存命中率、日期区间筛选、错误监控、用量高峰探查，生成本地使用信息看板，并同步导出全量 CSV 与 xlsx。仅当用户**明确**想查看、生成或导出**自己 WorkBuddy 本机/本账号**的使用状态 / 使用统计 / 工作信息看板时调用；不用于其他产品或系统的用量统计，也不为任意数据生成通用看板。纯本地、全程零网络、可搬运；可选 --credit-xlsx 作参考补充，只在本地缺少逐次明细的日期上补入。 EN: Offline dashboard for WorkBuddy local usage analytics, with token as primary metric and credit measured per call, covering thinking efficiency, model distribution, model cost & rates, costliest single prompts, cache hit rate, date-range filtering, error monitoring, usage-spike inspection; a full CSV and xlsx export is written on every run. Triggers only when the user explicitly wants to view, generate, or export their own WorkBuddy local/account usage status / stats / activity dashboard; not for other products' usage analytics, nor for building generic dashboards from arbitrary data. Fully local and zero-network; the optional --credit-xlsx serves as a reference supplement only, filling days that lack local per-call detail.

## Task

Use `workbuddy-usage-status` to run an operations workflow with safety checks, then verify final state with operational evidence.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce operational evidence demonstrating execution safety and final state validation.
- Keep total runtime steps efficient.
