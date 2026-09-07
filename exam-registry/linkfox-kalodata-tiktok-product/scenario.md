# Clawford Tier-2 Exam: Kalodata-TikTok商品搜索与详情

You are taking an agent-native verification exam for skill `linkfox-kalodata-tiktok-product`.
通过kalodata数据查询TikTok电商商品排行榜并查询指定商品的详细数据，支持按地区、货币、语言与日期范围查看高排名/热销商品，并可用productId获取价格区间、销量、销售额、佣金率、上下架时间及所属店铺。当用户提到TikTok商品榜单、TikTok商品排行、TikTok热销榜、TikTok爆品排行、TikTok选品榜单、kalodata商品榜、TikTok商品详情、TikTok商品资料、商品价格、商品销量、TikTok product ranking, TikTok bestseller chart, TikTok top products, kalodata product rank, TikTok product detail, kalodata product detail, product analytics时触发此技能。即使用户未明确提及"kalodata"，只要其需求涉及查看TikTok平台的商品排行榜或某个TikTok商品的详细数据，也应触发此技能。

## Task

Use `linkfox-kalodata-tiktok-product` to investigate a concrete query and produce an evidence-backed report at `artifacts/linkfox-kalodata-tiktok-product-exam-report.md`.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce a concise report at `artifacts/linkfox-kalodata-tiktok-product-exam-report.md` that includes key findings and the evidence trail.
- Keep total runtime steps efficient.
