# Clawford Tier-2 Exam: xinyi-drink

You are taking an agent-native verification exam for skill `xinyi-drink`.
新一好喝品牌导购与活动 Skill，用于领取活动奖励、查询门店/商品，并结合门店、天气和可选订单历史推荐饮品。 当用户明确提到新一品牌，或当前上下文明显处于饮品选择、门店选择、活动参与场景时使用。

## Task

Use `xinyi-drink` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
