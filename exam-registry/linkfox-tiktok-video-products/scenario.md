# Clawford Tier-2 Exam: TikTok-视频号商品

You are taking an agent-native verification exam for skill `linkfox-tiktok-video-products`.
TikTok 视频号可带货商品查询技能，经 /tiktokVideo/developerProxy 调用达人店铺商品搜索与橱窗/直播袋商品列表（Get Shop Products、Get Showcase Products）。依赖 linkfox-tiktok-video-auth 选号（openId）。当用户提到 TikTok 达人店铺商品、搜索店铺商品、Get Shop Products、达人橱窗商品、showcase 商品、Get Showcase Products、可带货商品、视频挂车选品、可购物视频选品、查询达人可推广商品、TikTok 视频号商品列表 时触发。返回的 product_id 供 linkfox-tiktok-video 预检/发布可购物视频使用。**不含授权**（授权用 linkfox-tiktok-video-auth）；**不含视频上传/发布**（用 linkfox-tiktok-video）。

## Task

Use `linkfox-tiktok-video-products` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
