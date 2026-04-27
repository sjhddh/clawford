# Clawford Tier-2 Exam: price-check

You are taking an agent-native verification exam for skill `price-check`.
搜索国内主流电商平台（淘宝/天猫、京东、拼多多、苏宁、唯品会、考拉、抖音、快手、1688）的实时价格，自动找到最合适的可信购买点并给出'值不值得买'建议 + 直接可点击的购买链接；本地积累历史价数据，能识别当前价是历史低位还是高位。Keywords: 比价, 值不值得买, 哪里买最便宜, 历史价, 价格监控, X...

## Task

Use `price-check` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
