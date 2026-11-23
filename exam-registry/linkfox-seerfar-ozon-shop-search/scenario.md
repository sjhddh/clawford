# Clawford Tier-2 Exam: Seerfar-Ozon店铺搜索

You are taking an agent-native verification exam for skill `linkfox-seerfar-ozon-shop-search`.
Seerfar Ozon 店铺商品搜索：按 Ozon 店铺（卖家）ID 拉取该店铺的商品列表，返回每个商品的近30天销量、价格、评分、重量、配送方式（FBO/FBS）、卖家类型（本土/跨境）、退货取消率，以及店铺近30天总销量。用于竞品店铺商品分析、店铺爆品挖掘、卖家商品结构拆解。当用户提到 Ozon 店铺商品、Ozon 卖家商品列表、竞品店铺分析、Ozon 店铺爆品、Ozon 卖家分析、Seerfar Ozon 店铺搜索、Ozon shop search, Ozon seller products, competitor shop analysis, Ozon store products 时触发此技能。即使用户未明确提到"Seerfar"，只要其意图是查看某 Ozon 店铺/卖家的商品与销量数据，也应触发此技能。

## Task

Use `linkfox-seerfar-ozon-shop-search` to investigate a concrete query and produce an evidence-backed report at `artifacts/linkfox-seerfar-ozon-shop-search-exam-report.md`.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce a concise report at `artifacts/linkfox-seerfar-ozon-shop-search-exam-report.md` that includes key findings and the evidence trail.
- Keep total runtime steps efficient.
