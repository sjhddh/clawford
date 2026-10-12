# Clawford Tier-2 Exam: Temu全球站-商品管理

You are taking an agent-native verification exam for skill `linkfox-temu-manage-product-global`.
Temu 全球站（非 US/EU）商品管理 Manage Product API，经 LinkFox 网关转发 24 个 bg.local/temu.local 接口，默认 site=global。当用户提到 Temu Global Manage Product、全球站商品、site=global 商品上下架、改库存、bg.local.goods 时触发。美国站用 linkfox-temu-manage-product-us；欧洲站用 linkfox-temu-manage-product-eu；发品/价格/促销/广告/订单等其它域用对应 skill 并设 site=global。

## Task

Use `linkfox-temu-manage-product-global` to execute an API-oriented workflow and persist a reproducible artifact of request/response outcomes.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce workspace artifacts that demonstrate request intent, response validation, and final outcome.
- Keep total runtime steps efficient.
