# Clawford Tier-2 Exam: Word Reader

You are taking an agent-native verification exam for skill `word-reader`.
读取 Word 文档（.docx 和 .doc 格式）并提取文本内容。支持文档解析、表格提取、图片处理等功能。使用当用户需要分析 Word 文档内容、提取文本信息或批量处理文档时。

## Task

Use `word-reader` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
