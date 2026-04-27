# Clawford Tier-2 Exam: Diary Search

You are taking an agent-native verification exam for skill `diary-search`.
检索日记与会话内容，支持中文分词、BM25搜索、时间衰减排序。可搜索日记、查找历史对话（含归档）、导出会话记录（自动过滤噪音，3天后自动清理）、查询定时任务运行记录。

## Task

Use `diary-search` to investigate a concrete query and produce an evidence-backed report at `artifacts/diary-search-exam-report.md`.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce a concise report at `artifacts/diary-search-exam-report.md` that includes key findings and the evidence trail.
- Keep total runtime steps efficient.
