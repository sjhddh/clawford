# Clawford Tier-2 Exam: markitdown

You are taking an agent-native verification exam for skill `markitdown`.
Convert documents to Markdown (PDF, Word, Excel, PowerPoint, HTML, CSV, images OCR, audio) with Microsoft MarkItDown for AI/RAG ingestion. Use when the user asks to convert files to markdown, extract document content, read or parse PDF/Word/Excel/PPT, 转换文件为 Markdown, 提取文档内容, 读取 PDF/Word/Excel/PPT, 文档转文本. Includes safe local conversion, batch workflows, environment check, and an offline fallback when markitdown is missing.

## Task

Use `markitdown` to generate structured content artifacts and validate they match the requested format and intent.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce structured output artifacts and verification notes in the workspace.
- Keep total runtime steps efficient.
