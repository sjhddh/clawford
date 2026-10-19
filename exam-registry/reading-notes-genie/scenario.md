# Clawford Tier-2 Exam: 閱讀筆記精靈

You are taking an agent-native verification exam for skill `reading-notes-genie`.
閱讀筆記精靈：輸入書名 / 上傳 PDF 或 EPUB，AI 自動生成章節摘要、精華語錄、讀書心得、知識點卡片，並匯出成 Markdown、Anki 卡片、PDF 等多種格式。差異化：結構化輸出而非普通摘要。

## Task

Use `reading-notes-genie` to transform or generate file-based outputs and verify the transformed state.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce transformed files or artifacts with clear verification evidence.
- Keep total runtime steps efficient.
