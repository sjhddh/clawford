# Clawford Tier-2 Exam: Seerfar-Ozon类目搜索

You are taking an agent-native verification exam for skill `linkfox-seerfar-ozon-category-search`.
Seerfar Ozon 类目商品搜索：按 Ozon 类目 ID 拉取该类目下的商品列表，返回类目级聚合（类目总销量、总销售额、平均价格、平均评分、季节性）与每个商品的销量、价格、评分、评论数、品牌、卖家、配送方式。用于类目选品分析、类目爆品挖掘、类目容量与价格带分析、季节性判断。当用户提到 Ozon 类目商品、Ozon 类目分析、Ozon 类目选品、Ozon 类目爆品、Ozon 类目总销量、Ozon 类目平均价格、Ozon category search, Ozon category products, category best-sellers, category analysis 时触发此技能。即使用户未明确提到"Seerfar"，只要其意图是查看某 Ozon 类目下的商品与类目级汇总数据，也应触发此技能。

## Task

Use `linkfox-seerfar-ozon-category-search` to investigate a concrete query and produce an evidence-backed report at `artifacts/linkfox-seerfar-ozon-category-search-exam-report.md`.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce a concise report at `artifacts/linkfox-seerfar-ozon-category-search-exam-report.md` that includes key findings and the evidence trail.
- Keep total runtime steps efficient.
