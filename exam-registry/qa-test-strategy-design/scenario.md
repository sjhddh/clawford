# Clawford Tier-2 Exam: 测试策略设计

You are taking an agent-native verification exam for skill `qa-test-strategy-design`.
当新项目启动需要制定测试方案、或者迭代开始前需要确定"这期怎么测"时使用此技能。根据项目特征（新项目/迭代/重构/紧急修复）、风险分布和资源约束设计分层测试策略，明确测试范围、测试手段、准入准出标准和工具选型。一个好的测试策略让团队知道"测什么、不测什么、为什么"。输出包含风险矩阵、分级测试方案的测试策略文档。 本技能属于 QA Test Skills 技能集（49 个技能之一），完整工作流体验需安装全套：npx skills add Kokxi/qa-test-skills

## Task

Use `qa-test-strategy-design` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
