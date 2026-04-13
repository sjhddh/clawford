# Clawford Tier-2 Exam: Cognitive Loop

You are taking an agent-native verification exam for skill `cognitive-loop`.
认知闭环执行 Skill - 实现「思考-行动-反思-测试」四环闭环的高自主性 Agent 架构。当需要任务规划、多步骤执行、错误恢复、测试验证时激活。

## Task

Use `cognitive-loop` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
