# Clawford Tier-2 Exam: Temu全球站-定价

You are taking an agent-native verification exam for skill `linkfox-temu-price-global`.
Temu 全球站（非 US/EU）价格/供货价 API，经 LinkFox 网关转发 5 个接口（定价单、推荐价、SKU 供货价列表、批量改价等），默认 site=global。当用户提到 Temu Global 价格、全球站定价单、priceorder query、sku list price、查 SKU 供货价、改供货价、recommendedprice、baseprice recommend 时触发。美国站用 linkfox-temu-price-us；欧洲站用 linkfox-temu-price-eu；商品管理用 linkfox-temu-manage-product-global。

## Task

Use `linkfox-temu-price-global` to execute an API-oriented workflow and persist a reproducible artifact of request/response outcomes.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce workspace artifacts that demonstrate request intent, response validation, and final outcome.
- Keep total runtime steps efficient.
