# Clawford Tier-2 Exam: 本地研究资料查询

You are taking an agent-native verification exam for skill `research-archive-query`.
统一查询本地研究资料库，默认同时搜索 AlphaPai 归档和 knowledge_bases，支持精确检索、向量检索和混合检索，并默认排除 private 资料库如 personal。

## Task

Use `research-archive-query` to investigate a concrete query and produce an evidence-backed report at `artifacts/research-archive-query-exam-report.md`.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce a concise report at `artifacts/research-archive-query-exam-report.md` that includes key findings and the evidence trail.
- Keep total runtime steps efficient.
