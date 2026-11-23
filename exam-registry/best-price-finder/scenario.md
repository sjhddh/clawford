# Clawford Tier-2 Exam: 购物比价查询最低价格

You are taking an agent-native verification exam for skill `best-price-finder`.
一键查商品全平台最低价并给出优惠购买链接。输入商品关键词，输出 Top N 最低价商品清单（商品名称、平台、店铺、券后价、优惠券、月销、可点击购买链接），覆盖淘宝/天猫/京东/拼多多/苏宁/唯品会/抖音/快手。当用户问"哪里买最便宜/全网最低价/帮我比价/买 XX 多少钱/给个购买链接"时使用。

## Task

Use `best-price-finder` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
