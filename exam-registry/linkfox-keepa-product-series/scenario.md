# Clawford Tier-2 Exam: Keepa-商品历史数据

You are taking an agent-native verification exam for skill `linkfox-keepa-product-series`.
查询亚马逊商品的历史时序数据，包括价格走势、BSR（畅销排名）趋势、评分变化、卖家数量和月销量，支持多个亚马逊站点的任意ASIN。当用户提到价格历史、价格追踪、BSR历史、BSR趋势、历史定价、价格波动、Keepa数据、排名历史、降价提醒、秒杀历史价格、Buy Box价格趋势、优惠券价格、FBA/FBM价格对比、卖家数量变化、评分趋势、销量历史、price history, BSR trends, Keepa historical data, price tracking, sales history, rating changes, seller count changes, price fluctuation时触发此技能。即使用户未明确提及"Keepa"或"时序数据"，只要其需求涉及亚马逊历史商品级数据（如价格、排名或销量随时间的变化趋势），也应触发此技能。

## Task

Use `linkfox-keepa-product-series` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
