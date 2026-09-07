# Clawford Tier-2 Exam: 夸克扫描王 - 转Office Alibaba-Quark-Transoffice

You are taking an agent-native verification exam for skill `alibaba-quark-transoffice`.
由夸克扫描王提供的文件格式转换工具。当用户需要将图片、截图或扫描件转换为 Office 文档（Word/Excel）或 PDF 时，使用此技能。适用于包含复杂表格、合同或图文混排内容的图片或扫描件，可尽量还原原始版式并生成可编辑文档。即使用户未明确提到格式转换，只要用户的需求涉及将图片内容转换为可编辑文档（如 .docx、.xlsx 或 .pdf），也应触发此技能。请勿用于提取纯文本或识别文字内容、图像增强处理或从零创建文档

## Task

Use `alibaba-quark-transoffice` to transform or generate file-based outputs and verify the transformed state.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce transformed files or artifacts with clear verification evidence.
- Keep total runtime steps efficient.
