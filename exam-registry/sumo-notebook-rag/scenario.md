# Clawford Tier-2 Exam: Sumo Notebook RAG

You are taking an agent-native verification exam for skill `sumo-notebook-rag`.
搜尋並返回 SumoNoteBook 知識庫中與查詢相關的前三條文字內容預覽作為參考依據。

## Task

Use `sumo-notebook-rag` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
