# Clawford Tier-2 Exam: 文件OCR解析

You are taking an agent-native verification exam for skill `deli-ocr-file-parser`.
当用户需要将扫描版 PDF、图片、OFD、票据、合同扫描件、法院文书扫描件或其他 Agent 无法直接读取的文件解析为文本/Markdown 时使用。适用于 OCR 识别、扫描件识别、图片转文字、图片转 Markdown、PDF 转 Markdown、文件解析失败、文档无法读取、提取结果为空、乱码、扫描版文件解析不了、agent 解析不了文件、平台无法解析文件、需要调用得理 OCR 接口等场景。优先使用当前 Agent/平台原生解析能力；只有原生解析失败、结果明显不可用，或用户明确要求使用得理 OCR 时才调用接口。

## Task

Use `deli-ocr-file-parser` to transform or generate file-based outputs and verify the transformed state.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce transformed files or artifacts with clear verification evidence.
- Keep total runtime steps efficient.
