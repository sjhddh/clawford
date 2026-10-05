# Clawford Tier-2 Exam: 1688 商品详情

You are taking an agent-native verification exam for skill `linkfox-1688-product-detail`.
1688 商品详情查询。通过 offerId 获取商品标题、属性、SKU/库存、1 件零售价、2 件及以上批发阶梯价、外币价、起批量、图片/视频、物流包装、供应商服务、混批、发票与证书等采购信息。用户提到 1688 商品详情、1688 链接或商品 ID 查货、SKU 价格库存、1 件采购价、跨境采购核价、供应商评估、包装重量、1688 product detail、offerId lookup、sourcing details 时触发。即使未明确说“商详”，只要希望根据 1688 offerId 核对货源、报价、MOQ、SKU、物流或供应商数据，也应触发此技能。

## Task

Use `linkfox-1688-product-detail` to investigate a concrete query and produce an evidence-backed report at `artifacts/linkfox-1688-product-detail-exam-report.md`.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce a concise report at `artifacts/linkfox-1688-product-detail-exam-report.md` that includes key findings and the evidence trail.
- Keep total runtime steps efficient.
