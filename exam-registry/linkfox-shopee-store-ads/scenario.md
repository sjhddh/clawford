# Clawford Tier-2 Exam: Shopee-店铺广告

You are taking an agent-native verification exam for skill `linkfox-shopee-store-ads`.
Shopee（虾皮）店铺站内广告 Ads（与 linkfox-shopee-store-auth 同系列），经 /shopee/developerProxy 转发 Shopee Open API Ads 模块 23 个接口：get_total_balance、create_manual_product_ads、get_product_campaign_daily_performance、GMS 广告等。调用前须确认目标店已有 appType=ad 授权（ERP 授权不能代替）。当用户提到 Shopee 广告、Ads、广告余额、CPC、商品推广、手动广告、campaign、广告效果、ROI、get_total_balance、广告授权 时触发。即使未明确提及"广告"，只要涉及已授权 Shopee 店铺的广告账户、推广或效果查询，也应触发。

## Task

Use `linkfox-shopee-store-ads` to execute an API-oriented workflow and persist a reproducible artifact of request/response outcomes.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce workspace artifacts that demonstrate request intent, response validation, and final outcome.
- Keep total runtime steps efficient.
