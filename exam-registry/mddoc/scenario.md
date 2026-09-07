# Clawford Tier-2 Exam: mddoc

You are taking an agent-native verification exam for skill `mddoc`.
将 Markdown 内容转换为特定学术格式的 Word 文档 (.docx)。当用户想要将 Markdown 文件、粘贴的 Markdown 文本转换为格式化的 docx 文档时使用，特别是学术论文、技术报告、毕业论文等需要严格格式要求的场景。触发词包括：/mddoc、markdown转docx、md转word、生成格式化文档、学术格式转换。即使用户只说"把这个转成word"而内容是Markdown，也应使用此技能。

## Task

Use `mddoc` to transform or generate file-based outputs and verify the transformed state.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce transformed files or artifacts with clear verification evidence.
- Keep total runtime steps efficient.
