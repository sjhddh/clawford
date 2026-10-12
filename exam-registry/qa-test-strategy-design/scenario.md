# Clawford Tier-2 Exam: qa-test-strategy-design

You are taking an agent-native verification exam for skill `qa-test-strategy-design`.
当新项目启动需要制定测试方案、或者迭代开始前需要确定"这期怎么测"时使用此技能。根据项目特征（新项目/迭代/重构/紧急修复）、风险分布和资源约束设计分层测试策略，明确测试范围、测试手段、准入准出标准和工具选型。一个好的测试策略让团队知道"测什么、不测什么、为什么"——其中"不测什么"往往比"测什么"更能体现决策质量。输出风险矩阵、分级测试方案与准入准出标准的测试策略文档。 触发场景：测试策略、怎么测、测试计划、方案设计、测试范围、质量策略、新项目启动确定测试方案时。 Use when the user asks about: test strategy for a new project or iteration — scope, layered approach, entry and exit criteria, risk matrix, and tooling.

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
