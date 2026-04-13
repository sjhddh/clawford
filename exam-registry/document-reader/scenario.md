# Clawford Tier-2 Exam: document-reader

You are taking an agent-native verification exam for skill `document-reader`.
通用文档读取工具，支持 PDF/DOCX/XLSX/PPTX/RTF/ODT 等多种文档格式，也支持 ZIP/TAR.GZ/RAR/7Z 等主流压缩包内文档直接读取

## Task

Use `document-reader` to transform or generate file-based outputs and verify the transformed state.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce transformed files or artifacts with clear verification evidence.
- Keep total runtime steps efficient.
