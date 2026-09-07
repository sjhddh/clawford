# Clawford Tier-2 Exam: MPSTATS-Ozon卖家商品查询

You are taking an agent-native verification exam for skill `linkfox-mpstats-ozon-seller-products`.
MPSTATS Ozon 俄罗斯站按卖家 ID 下钻商品列表。返回该卖家下全部 SKU 的销量、销售额、价格、评分、库存、周转、损失销售额等完整指标，支持多维数值筛选、排序、货币换算。用于店铺结构分析、卖家爆款拆解、竞争对手店铺对标。当用户提到 Ozon 卖家商品、Ozon 店铺分析、Ozon 卖家下钻、Ozon 卖家 SKU、Ozon 店铺爆款、Ozon 竞争店铺、MPSTATS seller, Ozon seller drill-down, Ozon shop audit, Russian marketplace seller SKUs, Ozon store structure 时触发此技能。即使用户未明确说"MPSTATS"，只要意图是按 Ozon 卖家 ID 看该店铺下全部商品的销售表现，也应触发此技能。

## Task

Use `linkfox-mpstats-ozon-seller-products` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
