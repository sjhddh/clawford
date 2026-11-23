# Clawford Tier-2 Exam: Shopee-商品详情

You are taking an agent-native verification exam for skill `linkfox-shopee-product-detail`.
查询单个 Shopee 公共商品详情。输入带有 -i.数字店铺ID.数字商品ID 的商品直链，支持新加坡、印度尼西亚、马来西亚、菲律宾、泰国、台湾、越南和巴西站点，返回来源当前可获取的价格、折扣、销量、库存、SKU 变体、图片、品牌、类目、店铺与评分等结构化数据。当用户提到 Shopee 商品详情、虾皮商品链接解析、价格库存核对、SKU 变体、竞品页面拆解、Shopee product details、Shopee listing lookup 时触发。即使用户未明确说“商品详情”，只要提供 Shopee 商品直链并希望读取当前公开页面数据，也应触发此技能。

## Task

Use `linkfox-shopee-product-detail` to investigate a concrete query and produce an evidence-backed report at `artifacts/linkfox-shopee-product-detail-exam-report.md`.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce a concise report at `artifacts/linkfox-shopee-product-detail-exam-report.md` that includes key findings and the evidence trail.
- Keep total runtime steps efficient.
