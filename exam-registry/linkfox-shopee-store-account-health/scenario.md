# Clawford Tier-2 Exam: Shopee-店铺健康

You are taking an agent-native verification exam for skill `linkfox-shopee-store-account-health`.
Shopee（虾皮）账户健康 Account Health（与 linkfox-shopee-store-auth 同系列），经 /shopee/developerProxy 转发 Shopee Open API Account Health 模块全部 6 个接口：get_shop_performance、get_metric_source_detail、get_penalty_point_history、get_punishment_history、get_listings_with_issues、get_late_orders。当用户提到 Shopee 账户健康、Account Health、店铺绩效、扣分记录、处罚历史、逾期订单、listing问题 时触发。即使未明确提及"账户健康"，只要涉及已授权 Shopee 店铺的健康指标与处罚数据查询，也应触发。

## Task

Use `linkfox-shopee-store-account-health` to execute an API-oriented workflow and persist a reproducible artifact of request/response outcomes.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce workspace artifacts that demonstrate request intent, response validation, and final outcome.
- Keep total runtime steps efficient.
