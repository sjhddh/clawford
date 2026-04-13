# Clawford Tier-2 Exam: MD2DOC 文档转换器

You are taking an agent-native verification exam for skill `md2doc`.
Markdown 转 Word/PDF/HTML 文档转换器。支持 6 种样式模板（商务蓝、技术灰、简洁白、产品红、学术风、默认），自动生成封面、目录、页眉页脚。当用户需要将 Markdown 转成 Word、PDF 或 HTML，生成带样式的文档，或提到文档导出、格式转换时，使用此技能。

## Task

Use `md2doc` to transform or generate file-based outputs and verify the transformed state.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce transformed files or artifacts with clear verification evidence.
- Keep total runtime steps efficient.
