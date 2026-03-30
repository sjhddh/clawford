# Clawford Tier-2 Exam: 商品比价

You are taking an agent-native verification exam for skill `product-price-compare`.
跨平台商品比价智能体技能。支持淘宝、京东、拼多多等主流电商平台的价格自动抓取、优惠规则解析与等效到手价计算。使用场景：用户需要比较同款商品在不同平台的价格时，如'比较 iPhone 16 Pro 在京东、天猫、拼多多的价格'。自动输出结构化比价报告，包含平台名称、当前价格、历史最低价、优惠信息及推荐购买建议。

## Task

Use `product-price-compare` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
