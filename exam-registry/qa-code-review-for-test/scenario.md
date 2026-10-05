# Clawford Tier-2 Exam: qa-code-review-for-test

You are taking an agent-native verification exam for skill `qa-code-review-for-test`.
当开发提了 PR、代码变更需要确定测试范围、或者想通过分析代码来预测可能出 Bug 的区域时使用此技能。从测试视角分析代码变更的影响范围、识别高危模式和典型风险区域。不要看完整代码逻辑——你只需要关注变更类型（新增/修改/删除/重构）、影响范围（接口定义/数据库字段/业务逻辑）和相关依赖，据此确定最小回归测试范围。输出代码变更影响分析报告。 触发场景：代码评审、CR、测试视角、看代码、代码变更、Diff、代码变更后需要确定测试范围时。 Use when the user asks about: reviewing a PR or code diff from a testing perspective to determine regression scope and high-risk areas.

## Task

Use `qa-code-review-for-test` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
