# Clawford Tier-2 Exam: 回归测试

You are taking an agent-native verification exam for skill `qa-regression-testing`.
根据变更范围、风险等级和时间约束制定分级精准回归方案。当版本迭代了、代码改动了、你需要确定"到底哪些功能要重新测一遍"的时候使用此技能。回归的时间永远不够——此技能帮你做出取舍决策：冒烟回归（P0核心流程）、核心回归（高影响区域）、全量回归（有余力时）。基于变更分析和风险评估选择最省时的回归策略，而不是盲目全量回归。 本技能属于 QA Test Skills 技能集（49 个技能之一），完整工作流体验需安装全套：npx skills add Kokxi/qa-test-skills

## Task

Use `qa-regression-testing` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
