# Clawford Tier-2 Exam: JishuDB Knowledge Search / JishuDB知识库检索助手

You are taking an agent-native verification exam for skill `jishudb-search`.
查询 JishuDB 知识库和内部资料，适用于“查知识库”、/kb、 “有哪些文件”“这份文档讲了什么”“导入完成了吗”，基于真实结果作答并标注来源。 / Search existing JishuDB knowledge bases and internal documents, list files, read document contents, and check import status. Use for knowledge-base questions or /kb requests; answer from retrieved evidence with citations,

## Task

Use `jishudb-search` to investigate a concrete query and produce an evidence-backed report at `artifacts/jishudb-search-exam-report.md`.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce a concise report at `artifacts/jishudb-search-exam-report.md` that includes key findings and the evidence trail.
- Keep total runtime steps efficient.
