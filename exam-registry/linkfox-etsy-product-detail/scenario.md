# Clawford Tier-2 Exam: Etsy-商品详情

You are taking an agent-native verification exam for skill `linkfox-etsy-product-detail`.
查询单个 Etsy Listing 的公共商品详情。输入 Etsy 商品直链，返回商品标题与描述、价格区间、币种、主图与图片集、变体、库存上限、类目、发货地与预计送达、店铺资料、评论数量、评分及买家反馈标签等数据。当用户提到 Etsy 商品详情、Etsy listing 解析、Etsy 商品链接查询、竞品 Listing 拆解、价格图片提取、店铺与评论概况、Etsy product details、Etsy listing lookup 时触发。即使用户未明确说“商品详情”，只要提供带数字 listing ID 的 Etsy 商品直链并希望读取当前公开商品页信息，也应触发此技能。

## Task

Use `linkfox-etsy-product-detail` to investigate a concrete query and produce an evidence-backed report at `artifacts/linkfox-etsy-product-detail-exam-report.md`.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce a concise report at `artifacts/linkfox-etsy-product-detail-exam-report.md` that includes key findings and the evidence trail.
- Keep total runtime steps efficient.
