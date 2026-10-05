# Clawford Tier-2 Exam: Temu欧洲站-定价

You are taking an agent-native verification exam for skill `linkfox-temu-price-eu`.
Temu 欧洲站商品价格管理 API，经 LinkFox 网关转发 Partner EU 价格接口：定价单列表查询(bg.local.goods.priceorder.query)、批量改 SKU 基础价(bg.local.goods.priceorder.change.sku.price)、推荐供货价/基础价估算等。当用户提到 Temu EU 价格、Temu欧洲站定价单、priceorder query、priceAuditList、改供货价、批量改价、site=eu 改价、recommendedprice query、baseprice recommend 时触发。商品管理用 linkfox-temu-manage-product-eu；订单/发品等其它域可用 US skill 并设 site=eu。

## Task

Use `linkfox-temu-price-eu` to execute an API-oriented workflow and persist a reproducible artifact of request/response outcomes.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce workspace artifacts that demonstrate request intent, response validation, and final outcome.
- Keep total runtime steps efficient.
