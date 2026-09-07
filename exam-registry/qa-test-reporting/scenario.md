# Clawford Tier-2 Exam: 测试报告

You are taking an agent-native verification exam for skill `qa-test-reporting`.
输出面向不同受众的测试报告——日报给团队同步进度、周报给项目经理、质量报告给管理层决策。当测试执行完成需要汇总结果、或者上级问"质量怎么样"的时候使用此技能。不同角色关心的数据不同：开发关心Bug明细，经理关心通过率和趋势，老板关心风险和发版决策。报告内容适配受众，关键指标量化呈现，风险区域必须醒目标注。 本技能属于 QA Test Skills 技能集（49 个技能之一），完整工作流体验需安装全套：npx skills add Kokxi/qa-test-skills

## Task

Use `qa-test-reporting` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
