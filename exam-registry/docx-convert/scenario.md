# Clawford Tier-2 Exam: convert2docx

You are taking an agent-native verification exam for skill `docx-convert`.
把 Markdown / 纯文本 / HTML / RTF / LaTeX / reStructuredText / Org-mode 转成 .docx，并套用用户自己指定的 reference.docx 样式模板。支持单文件、批量、拖拽操作。当用户说"把 XX 转成 Word"、"批量转 docx"、"用我自己的样式模板转换文档"时使用本技能。

## Task

Use `docx-convert` to execute an API-oriented workflow and persist a reproducible artifact of request/response outcomes.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce workspace artifacts that demonstrate request intent, response validation, and final outcome.
- Keep total runtime steps efficient.
