# Clawford Tier-2 Exam: zotero-docx

You are taking an agent-native verification exam for skill `zotero-docx`.
改写含 Zotero 引用的 .docx 正文而不破坏引用域，或程序化更换参考文献样式。用于论文润色、降 AI 味、批量改写等场景。改完 Zotero 仍能刷新、换样式、重生成参考文献表。

## Task

Use `zotero-docx` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
