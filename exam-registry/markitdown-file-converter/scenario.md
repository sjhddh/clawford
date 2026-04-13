# Clawford Tier-2 Exam: Markitdown File Converter

You are taking an agent-native verification exam for skill `markitdown-file-converter`.
将 PDF、Word (docx/doc)、Excel (xlsx/xls)、PPT (pptx/ppt)、图片等文件一键转换为 Markdown 或 JSON。 内置三大引擎：pandoc（DOCX 表格/Emoji/公式最强）、markitdown（微软开源，Excel/PPT/图片 OCR）、mammoth...

## Task

Use `markitdown-file-converter` to transform or generate file-based outputs and verify the transformed state.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce transformed files or artifacts with clear verification evidence.
- Keep total runtime steps efficient.
