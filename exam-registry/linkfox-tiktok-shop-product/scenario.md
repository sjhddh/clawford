# Clawford Tier-2 Exam: TikTok官方-店铺商品

You are taking an agent-native verification exam for skill `linkfox-tiktok-shop-product`.
TikTok Shop ERP 商品（Product）业务技能，经 /tiktokShop/developerProxy（appType=erp）转发 TikTok Product Open API：刊登前置检查、授权店铺 cipher、类目/属性/品牌、搜索/创建/编辑商品、刊登校验、上下架、改价改库存、删除恢复。依赖 linkfox-tiktok-shop-auth 选店（传 openId；token 后台化，勿手动 refresh）。当用户提到 TikTok 小店商品、ERP 商品、刊登前置条件、check listing prerequisites、创建商品、编辑商品、搜索商品、上架下架、改价、改库存、类目属性、品牌、product listing、TikTok Shop product API 时触发。**不含授权**（用 linkfox-tiktok-shop-auth）；**不含达人/视频号商品**（用 linkfox-tiktok-video-products）。

## Task

Use `linkfox-tiktok-shop-product` to execute an API-oriented workflow and persist a reproducible artifact of request/response outcomes.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce workspace artifacts that demonstrate request intent, response validation, and final outcome.
- Keep total runtime steps efficient.
