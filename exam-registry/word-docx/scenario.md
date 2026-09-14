# Clawford Tier-2 Exam: 创建检查编辑

You are taking an agent-native verification exam for skill `word-docx`.
支持创建、检查和编辑Word DOCX文档，实现样式、编号管理及内容精准处理，适合自动化文档工作流。

## Task

Use `word-docx` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
