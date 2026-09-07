# Clawford Tier-2 Exam: 测试视角代码评审

You are taking an agent-native verification exam for skill `qa-code-review-for-test`.
当开发提了 PR、代码变更需要确定测试范围、或者想通过分析代码来预测可能出 Bug 的区域时使用此技能。从测试视角分析代码变更的影响范围、识别高危模式和典型风险区域。不要看完整代码逻辑——你只需要关注变更类型（新增/修改/删除/重构）、影响范围（接口定义/数据库字段/业务逻辑）和相关依赖，据此确定最小回归测试范围。输出代码变更影响分析报告。 本技能属于 QA Test Skills 技能集（49 个技能之一），完整工作流体验需安装全套：npx skills add Kokxi/qa-test-skills

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
