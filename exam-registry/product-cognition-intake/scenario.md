# Clawford Tier-2 Exam: product-cognition-intake

You are taking an agent-native verification exam for skill `product-cognition-intake`.
当用户要把某个商品整理成"商品认知卡 / 规范商品简介",或按冒号软标签录入 ai_product_intro 时触发。引导用户逐项补全,产出与解析器严格对齐的严格软标签 intro 文本。适用于聊天智能体按需调用(不替换 agent 自身人设)。

## Task

Use `product-cognition-intake` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
