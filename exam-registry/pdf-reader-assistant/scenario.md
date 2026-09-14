# Clawford Tier-2 Exam: PDF阅读助手

You are taking an agent-native verification exam for skill `pdf-reader-assistant`.
PDF 阅读助手技能 v2.0。支持文本提取、表格提取、扫描版OCR识别、智能问答、多文档对比、批量处理。触发词：PDF、阅读PDF、分析PDF、PDF摘要、提取PDF、研报、论文、文档分析。

## Task

Use `pdf-reader-assistant` to transform or generate file-based outputs and verify the transformed state.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce transformed files or artifacts with clear verification evidence.
- Keep total runtime steps efficient.
