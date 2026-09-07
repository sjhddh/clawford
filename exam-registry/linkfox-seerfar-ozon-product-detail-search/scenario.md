# Clawford Tier-2 Exam: Seerfar-Ozon商品详情

You are taking an agent-native verification exam for skill `linkfox-seerfar-ozon-product-detail-search`.
Seerfar Ozon 商品详情查询：按 Ozon 商品 SKU 拉取单个商品的完整详情，返回标题、价格（卢布）、评分、评论数、QA数、统计窗口内总销量与日均销量、销售额、库存、类目排名、每日销量趋势、品牌、卖家、配送方式（FBO/FBS/OZON）、重量、上架时间/天数/月数等。用于单品深度分析、竞品商品拆解、Ozon 选品评估、Listing 诊断、销量趋势与类目排名跟踪。当用户提到 Ozon 商品详情、Ozon 单品分析、Ozon SKU 查询、竞品商品数据、Ozon 销量趋势、Ozon 类目排名、Ozon 库存、Ozon 上架时间、Seerfar Ozon 商品搜索、Ozon product detail, Ozon SKU lookup, single product analysis, competitor product teardown, Ozon sales trend, category rank 时触发此技能。即使用户未明确提到"Seerfar"，只要其意图是查看某个 Ozon 商品的详细数据，也应触发此技能。

## Task

Use `linkfox-seerfar-ozon-product-detail-search` to investigate a concrete query and produce an evidence-backed report at `artifacts/linkfox-seerfar-ozon-product-detail-search-exam-report.md`.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce a concise report at `artifacts/linkfox-seerfar-ozon-product-detail-search-exam-report.md` that includes key findings and the evidence trail.
- Keep total runtime steps efficient.
