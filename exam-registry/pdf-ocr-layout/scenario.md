# Clawford Tier-2 Exam: pdf-ocr-layout

You are taking an agent-native verification exam for skill `pdf-ocr-layout`.
基于智谱 GLM-OCR、GLM-4.7 及 GLM-4.6V 的多模态文档深度解析工具。

Use when:
- 需要高精度提取文档（PDF/图片）中的表格并转换为 Markdown 格式
- 需要从文档页面中自动裁剪并提取插图、图表为独立文件
- 需要对提取的图表进行深度语义理解（基于 GLM-4.6V 视觉分析）
- 需要对提取的表格数据进行逻辑分析（基于 GLM-4.7 文本分析）

核心架构：
1. 视觉提取：GLM-OCR
2. 语义理解：GLM-4.7 (纯文本/表格) + GLM-4.6V (多模态/图像)

## Task

Use `pdf-ocr-layout` to transform or generate file-based outputs and verify the transformed state.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce transformed files or artifacts with clear verification evidence.
- Keep total runtime steps efficient.
