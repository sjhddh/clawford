# Clawford Tier-2 Exam: Docx Tool

You are taking an agent-native verification exam for skill `docx-tool`.
使用 python-docx 库创建、读取和修改 Word 文档 (.docx)。支持文本、段落、表格、样式、图片等操作。

## Task

Use `docx-tool` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
