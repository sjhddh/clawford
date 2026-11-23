# Clawford Tier-2 Exam: 识货购物助手

You are taking an agent-native verification exam for skill `shihuo-shopping-assistant`.
TRIGGER：用户没有明确目标商品、只给品类用途预算或品牌就要求推荐、帮忙挑选、问哪款合适，或通过识货关键词或图片搜索查询商品、配色、尺码、SKU、历史价格、全网比价、哪里买或购买入口，或发来淘宝、京东、拼多多、得物、唯品会的商品链接、口令、分享文本，询问怎么买更合适、有没有隐藏券或补贴券时启用。SKIP：下单、加购、支付、订单、退款、售后、物流、独立库存和用户授权请求。

## Task

Use `shihuo-shopping-assistant` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
