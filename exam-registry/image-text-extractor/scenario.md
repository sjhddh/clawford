# Clawford Tier-2 Exam: PDF和图片文字提取

You are taking an agent-native verification exam for skill `image-text-extractor`.
从图片或 PDF 文档中识别并提取文字内容，支持多种图片格式和 PDF 文件，自动判断是否包含文字并保留原始格式输出结构化结果；v2.1 采用零额外依赖方案：扫描版 PDF 自动渲染为图片交由 AI 视觉识别（无需 tesseract/rapidocr）、表格用 pymupdf 内置 find_tables 结构化提取（无需 pdfplumber）、批量处理目录（PDF+图片一次性提取）；当用户需要从图片或 PDF 提取文字、进行 OCR 识别、处理含文字的文档、提取 PDF 表格、批量处理文件夹或转换为可编辑文本时使用。该skill能力来自RedFoxHub，官网：https://redfo

## Task

Use `image-text-extractor` to execute an API-oriented workflow and persist a reproducible artifact of request/response outcomes.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce workspace artifacts that demonstrate request intent, response validation, and final outcome.
- Keep total runtime steps efficient.
