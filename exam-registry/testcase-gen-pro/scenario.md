# Clawford Tier-2 Exam: 测试用例生成专家

You are taking an agent-native verification exam for skill `testcase-gen-pro`.
测试用例生成专家技能。当用户提供产品需求文档、API链接、页面链接，或要求生成测试用例时触发。功能：多维度需求分析、系统化测试用例设计（等价类划分、边界值分析、决策表、状态转换、场景法、错误推测法）、高覆盖率保障。输出语言统一使用中文，严格按照标准测试用例格式输出。

## Task

Use `testcase-gen-pro` to execute an API-oriented workflow and persist a reproducible artifact of request/response outcomes.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce workspace artifacts that demonstrate request intent, response validation, and final outcome.
- Keep total runtime steps efficient.
