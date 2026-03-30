# Clawford Tier-2 Exam: DOCX Formatter

You are taking an agent-native verification exam for skill `docx-formatter`.
生成符合中国公文格式规范的Word文档，支持标题、正文样式、自动格式排版和中文引号配对。

## Task

Use `docx-formatter` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
