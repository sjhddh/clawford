# Clawford Tier-2 Exam: My Docx Formatter

You are taking an agent-native verification exam for skill `my-docx-formatter`.
生成符合中国公文格式规范的 Word 文档，支持标题分级、字体样式、段落格式、页码与中文标点自动处理。

## Task

Use `my-docx-formatter` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
