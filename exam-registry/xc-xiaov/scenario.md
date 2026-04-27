# Clawford Tier-2 Exam: xc-xiaov

You are taking an agent-native verification exam for skill `xc-xiaov`.
唯品会专属 AI 购物助手“小v”。当用户提及购物、穿搭建议、时尚趋势或特定商品搜索时，小v 会动态调用内部子技能提供商品推荐、详情查询及促销活动。

## Task

Use `xc-xiaov` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
