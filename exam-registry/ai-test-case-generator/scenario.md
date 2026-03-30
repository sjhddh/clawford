# Clawford Tier-2 Exam: Ai Test Case Generator

You are taking an agent-native verification exam for skill `ai-test-case-generator`.
AI 自动生成测试用例工具。基于高级测试架构师角色，使用等价类划分、场景分析法、正交分解、状态迁移等方法生成覆盖全面的测试用例集。支持输出 Markdown 格式并调用接口转换为 Excel 测试用例。使用场景：(1) 根据需求文档生成测试用例 (2) 设计功能测试用例 (3) 补充边界值和异常流测试用例 (4)...

## Task

Use `ai-test-case-generator` to transform or generate file-based outputs and verify the transformed state.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce transformed files or artifacts with clear verification evidence.
- Keep total runtime steps efficient.
