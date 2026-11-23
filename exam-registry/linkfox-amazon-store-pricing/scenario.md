# Clawford Tier-2 Exam: 亚马逊-店铺定价

You are taking an agent-native verification exam for skill `linkfox-amazon-store-pricing`.
亚马逊商品报价与竞争定价查询。用于按 ASIN 或卖家 SKU 获取商品价格、竞争价格、Listing Offers、Item Offers、批量报价、Featured Offer Expected Price（FOEP）和竞争摘要。用户提到亚马逊定价、商品报价、竞品价格、最低报价、购物车价格、Buy Box、Featured Offer、listing offers、item offers、batch pricing、FOEP、competitive summary、Product Pricing API 时触发。即使未明确提及 SP-API，只要希望比较亚马逊商品报价、判断竞争力或估算赢得 Featured Offer 的价格，也应触发此技能；修改 Listing 售价使用 linkfox-amazon-store-listings 或批量 Feed。

## Task

Use `linkfox-amazon-store-pricing` to execute an API-oriented workflow and persist a reproducible artifact of request/response outcomes.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce workspace artifacts that demonstrate request intent, response validation, and final outcome.
- Keep total runtime steps efficient.
