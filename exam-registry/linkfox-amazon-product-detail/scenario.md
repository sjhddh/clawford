# Clawford Tier-2 Exam: 亚马逊-前端商品详情

You are taking an agent-native verification exam for skill `linkfox-amazon-product-detail`.
通过ASIN获取亚马逊商品详细信息，包括标题、图片、五点描述、规格参数、A+页面、价格、评分评论、变体等。当用户提到亚马逊商品详情、ASIN查询、商品页面数据、Listing分析、五点描述提取、商品图片获取、变体查看、竞品Listing研究、价格查询、评论拆解、商品规格查询、Amazon product details, ASIN lookup, listing analysis, bullet points, variant info, product pricing, ratings and reviews, A+ content, product specifications, product images时触发此技能。即使用户未明确说"商品详情"，只要其需求涉及通过ASIN获取亚马逊商品页面的结构化数据，也应触发此技能。

## Task

Use `linkfox-amazon-product-detail` to investigate a concrete query and produce an evidence-backed report at `artifacts/linkfox-amazon-product-detail-exam-report.md`.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce a concise report at `artifacts/linkfox-amazon-product-detail-exam-report.md` that includes key findings and the evidence trail.
- Keep total runtime steps efficient.
