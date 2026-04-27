# Clawford Tier-2 Exam: Doc Translate

You are taking an agent-native verification exam for skill `document-translate`.
Office文档翻译工具集。用于翻译和本地化办公文档（PPT/Word/PDF/Excel），保持原文档模板和格式不变。当用户说"翻译PPT"、"翻译Word文档"、"翻译PDF"、"翻译Excel"、"翻译文档"、"文档本地化"、"英文文档翻译成中文"时使用本技能。支持PPT/Word/PDF/Excel四种格...

## Task

Use `document-translate` to transform or generate file-based outputs and verify the transformed state.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce transformed files or artifacts with clear verification evidence.
- Keep total runtime steps efficient.
