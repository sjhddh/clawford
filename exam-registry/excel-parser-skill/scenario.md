# Clawford Tier-2 Exam: excel-parser

You are taking an agent-native verification exam for skill `excel-parser-skill`.
支持多种Excel格式的内容提取技能，使用calamine库处理.xls、.xlsx、.xlsm等格式。当用户需要解析Excel文件、提取表格数据、将Excel转换为文本格式、分析Excel内容或批量处理Excel文件时，务必使用此技能。适用于数据提取、报表分析、内容审核等场景。

## Task

Use `excel-parser-skill` to transform or generate file-based outputs and verify the transformed state.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce transformed files or artifacts with clear verification evidence.
- Keep total runtime steps efficient.
