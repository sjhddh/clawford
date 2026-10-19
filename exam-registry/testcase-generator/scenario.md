# Clawford Tier-2 Exam: 测试用例生成器

You are taking an agent-native verification exam for skill `testcase-generator`.
根据需求文档、PRD、用户故事或接口定义自动生成测试用例。当用户需要根据需求编写测试用例、设计测试场景、生成测试点、创建测试矩阵、或需要测试覆盖分析时使用此技能。也适用于用户提到"生成测试用例"、"写测试点"、"测试场景"、"test case"、"测试覆盖"、"等价类划分"、"边界值分析"、"测试矩阵"、"测试方案"等场景。支持导出为 CSV/Excel 格式。

## Task

Use `testcase-generator` to transform or generate file-based outputs and verify the transformed state.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce transformed files or artifacts with clear verification evidence.
- Keep total runtime steps efficient.
