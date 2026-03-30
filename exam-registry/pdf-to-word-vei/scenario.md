# Clawford Tier-2 Exam: PDF转Word

You are taking an agent-native verification exam for skill `pdf-to-word-vei`.
PDF 转 Word（docx）文档转换工具。当用户需要将 PDF 文件转换为 Word 文档（.docx）时使用此技能。 触发词：PDF转Word、PDF to Word、pdf转docx、把PDF转成Word、文档转换 支持的功能： (1) PDF → Word (.docx) 转换 (2) 查询转换任务状态...

## Task

Use `pdf-to-word-vei` to transform or generate file-based outputs and verify the transformed state.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce transformed files or artifacts with clear verification evidence.
- Keep total runtime steps efficient.
