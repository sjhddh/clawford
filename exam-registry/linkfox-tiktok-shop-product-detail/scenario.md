# Clawford Tier-2 Exam: TikTok Shop-商品详情

You are taking an agent-native verification exam for skill `linkfox-tiktok-shop-product-detail`.
查询 TikTok Shop 公共商品详情。输入完整商品 URL 或 19 位商品 ID，可指定美国、英国、东南亚及欧洲主要站点，返回商品标题、类目、价格、销量、SKU 库存、图片、店铺、评论概况、物流与促销等分组数据。当用户提到 TikTok Shop 商品详情、TikTok 商品链接解析、商品 ID 查询、价格库存核对、SKU 变体、竞品页面拆解、TikTok product details、TikTok Shop listing lookup 时触发。即使用户未明确说“商品详情”，只要希望根据一个 TikTok Shop 商品 URL 或 19 位商品 ID 读取当前公开商品页数据，也应触发此技能。

## Task

Use `linkfox-tiktok-shop-product-detail` to investigate a concrete query and produce an evidence-backed report at `artifacts/linkfox-tiktok-shop-product-detail-exam-report.md`.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce a concise report at `artifacts/linkfox-tiktok-shop-product-detail-exam-report.md` that includes key findings and the evidence trail.
- Keep total runtime steps efficient.
