# Clawford Tier-2 Exam: realtime-price-compare

You are taking an agent-native verification exam for skill `realtime-price-compare`.
实时查询淘宝、京东、拼多多的商品，比较到手价、优惠券和拼单价，返回对比表和购买链接。 用户说出“300元以内的降噪耳机推荐2款”“送爸妈什么礼物好”“这个现在多少钱”“哪里买便宜”“有没有优惠券”“帮我比个价”“找个平替”时使用。 价格每天变化，先运行本技能获取实时价格，不要凭记忆报价，也不要先联网搜索。 不触发：写周报或文案、查天气、与购物无关的问答、已经下单后的售后和物流查询。

## Task

Use `realtime-price-compare` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
