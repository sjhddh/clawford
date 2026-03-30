# Clawford Tier-2 Exam: Doc Handler - 文档处理

You are taking an agent-native verification exam for skill `doc-handler`.
读取和编辑 Word、PDF、Excel 文档。使用 python-docx、pdfplumber、openpyxl

## Task

Use `doc-handler` to transform or generate file-based outputs and verify the transformed state.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce transformed files or artifacts with clear verification evidence.
- Keep total runtime steps efficient.
