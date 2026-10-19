# Clawford Tier-2 Exam: impulse-purchase-brake

You are taking an agent-native verification exam for skill `impulse-purchase-brake`.
超市/网购"冲动消费"刹车器。 当用户在促销活动（双十一、满减、第二件半价等）中犹豫是否下单时调用此 Skill。 拆穿商家的促销陷阱，计算为凑单实际多花的钱和买到的闲置品数量，用"损失厌恶"的方式阻止非理性消费。 触发场景：用户表达"这个划算吗""要不要凑单""第二件半价买不买""满减要不要再凑点"等冲动消费倾向。

## Task

Use `impulse-purchase-brake` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
