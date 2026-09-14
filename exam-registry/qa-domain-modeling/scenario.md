# Clawford Tier-2 Exam: 测试领域建模

You are taking an agent-native verification exam for skill `qa-domain-modeling`.
通过构建状态机、数据流图和服务依赖图来理清复杂的业务逻辑和系统边界。当需求文档复杂、涉及多个子系统交互、或者你搞不清楚数据在不同模块之间怎么流转的时候，应当使用此技能。领域建模不是为了画图而画图——它帮你发现那些"需求文档里没写的"隐式业务规则和系统边界。适用于复杂业务流程的测试范围可视化。 本技能属于 QA Test Skills 技能集（49 个技能之一），完整工作流体验需安装全套：npx skills add Kokxi/qa-test-skills

## Task

Use `qa-domain-modeling` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
