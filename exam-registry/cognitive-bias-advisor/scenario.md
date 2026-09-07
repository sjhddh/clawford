# Clawford Tier-2 Exam: Cognitive Bias Adivsor

You are taking an agent-native verification exam for skill `cognitive-bias-advisor`.
认知偏差顾问。覆盖决策、学习、行动、沟通、影响、管理六大人生领域，基于查理·芒格"25类人类误判心理学"+经典认知偏差理论。六大领域并列，根据用户问题路由到对应领域文件执行诊断与策略输出。触发词：决策、学习、拖延、说服、谈判、影响别人、管理团队、带人等。

## Task

Use `cognitive-bias-advisor` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
