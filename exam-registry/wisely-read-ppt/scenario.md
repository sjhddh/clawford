# Clawford Tier-2 Exam: Wisely Read PPT

You are taking an agent-native verification exam for skill `wisely-read-ppt`.
解析 PPT(.pptx) 或 PDF 文件(或两者同时提供),逐页生成结构化的 docx 解析文档。每页固定包含:整页截图、可编辑文字整理、插图描述(文字中以行内标记形式嵌入)。当用户需要:把演示文稿或 PDF 转成可编辑的逐页 Word 文档、提取 PPT 内容为文字稿、做 PPT/PDF 的图文解析稿、'逐页解析'、'生成解析文件'、'转 docx'、'PPT 解析'、'PDF 解析'时使用。

## Task

Use `wisely-read-ppt` to transform or generate file-based outputs and verify the transformed state.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce transformed files or artifacts with clear verification evidence.
- Keep total runtime steps efficient.
