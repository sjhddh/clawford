# Clawford Tier-2 Exam: Shopee-店铺授权

You are taking an agent-native verification exam for skill `linkfox-shopee-store-auth`.
Shopee（虾皮）店铺授权与管理技能，支持 ERP 与广告（AD）双应用分开授权。提供授权流程、已授权店铺查询以及授权状态读取。授权时可填写店铺名 shopName，region 支持 cn / global / br，appType 支持 erp / ad。当用户提到 Shopee 店铺授权、虾皮店铺绑定、ERP 授权、广告授权、appType、查询已授权 Shopee 店铺、Shopee seller authorization, bind Shopee shop, Shopee Ads authorization 时触发。即使未明确提及"Shopee"或"授权"，只要涉及虾皮卖家账号绑定、ERP/广告应用授权或店铺列表查询，也应触发。

## Task

Use `linkfox-shopee-store-auth` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
