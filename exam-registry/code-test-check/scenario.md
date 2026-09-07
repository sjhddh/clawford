# Clawford Tier-2 Exam: Code Test Check

You are taking an agent-native verification exam for skill `code-test-check`.
根据本地 PRD 需求文档或功能测试用例(Excel/JSON)，分析用户指定的后端与前端源码，验证需求功能点/测试用例是否被代码实现，输出 Markdown 验证报告（含代码证据与实现状态矩阵）。

## Task

Use `code-test-check` to transform or generate file-based outputs and verify the transformed state.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce transformed files or artifacts with clear verification evidence.
- Keep total runtime steps efficient.
