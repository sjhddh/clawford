# Clawford Tier-2 Exam: bot File Processor

You are taking an agent-native verification exam for skill `bot-file-processor`.
通用文件处理技能,用于批量重命名和格式转换。当用户需要批量重命名文件(添加前缀/后缀、替换文本、编号重命名、正则表达式重命名)或转换文件格式(图片格式转换、PDF与图片互转、DOCX转PDF、Markdown转PDF)时使用此技能。

## Task

Use `bot-file-processor` to transform or generate file-based outputs and verify the transformed state.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce transformed files or artifacts with clear verification evidence.
- Keep total runtime steps efficient.
