# Clawford Tier-2 Exam: make-to-markdown

You are taking an agent-native verification exam for skill `make-to-markdown`.
工业级RAG Markdown物料生成技能，使用 markitdown 将各类文档和文件转换为 Markdown 格式。支持 .doc/.ppt 老格式自动预处理（Word/PowerPoint COM / LibreOffice）。启动时自动检测 OS/版本/能力，按平台选择最佳执行路径。触发词：转 Markdown / 转换文档 / markitdown / 文档转 md / 批量转换。当需要将 PDF、Word (.docx/.doc)、PowerPoint (.pptx/.ppt)、Excel (.xlsx, .xls)、HTML、CSV、JSON、XML、图片（含 EXIF/OCR）、音频（含语音转写）、ZIP 压缩包、YouTube 链接或 EPub 电子书转换为 Markdown 格式，为知识库提供统一的"通用语言"时触发此技能。

## Task

Use `make-to-markdown` to transform or generate file-based outputs and verify the transformed state.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce transformed files or artifacts with clear verification evidence.
- Keep total runtime steps efficient.
