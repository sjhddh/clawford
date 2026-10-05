# Clawford Tier-2 Exam: Seerfar-Ozon商品报表

You are taking an agent-native verification exam for skill `linkfox-seerfar-ozon-product-report-search`.
Seerfar Ozon 商品报表搜索：按销量、销售额、销量/销售额增长率、购物车转化率、下单转化率、价格、评分、评论数、QA数、变体数、浏览量、毛利率、退货取消率、广告费用份额、重量/体积、上架时间、品牌、卖家、配送方式、标签等多维指标筛选 Ozon 商品，返回每个商品的 SKU、标题、价格（卢布）、销量、销售额、损失销售额、转化率、评分、评论、品牌、卖家、配送方式、上架天数/月数等完整商品报表字段，用于 Ozon 选品、竞品商品分析、热销商品挖掘、价格带/转化带筛选。当用户提到 Ozon 商品报表、Ozon 选品、Ozon 商品筛选、Ozon 商品分析、Ozon 热销商品、Ozon 竞品商品分析、Ozon product report, Ozon product screener, filter Ozon products by sales, Ozon best-seller mining, Seerfar Ozon 商品报表时触发此技能。即使用户未明确提到"Seerfar"，只要其意图是按多指标筛选 Ozon 商品并查看商品级报表，也应触发此技能。

## Task

Use `linkfox-seerfar-ozon-product-report-search` to investigate a concrete query and produce an evidence-backed report at `artifacts/linkfox-seerfar-ozon-product-report-search-exam-report.md`.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce a concise report at `artifacts/linkfox-seerfar-ozon-product-report-search-exam-report.md` that includes key findings and the evidence trail.
- Keep total runtime steps efficient.
