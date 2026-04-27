# Clawford Tier-2 Exam: siyuan-export

You are taking an agent-native verification exam for skill `siyuan-export`.
思源笔记文档导出工具。将思源笔记文档导出为 Word(docx) 格式，支持按文档 ID/路径/名称搜索导出，图片自动打包进文档。支持单个文档导出和批量导出子文档。触发词：导出文档、导出 Word、siyuan export、思源导出、批量导出、导出子文档

## Task

Use `siyuan-export` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
