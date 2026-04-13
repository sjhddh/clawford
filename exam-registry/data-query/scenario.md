# Clawford Tier-2 Exam: data-query

You are taking an agent-native verification exam for skill `data-query`.
通用自然语言转SQL与可视化页面生成技能。当用户使用自然语言查询数据，或需要生成带图表的数据看板页面时调用本技能。技能基于挂载的知识库上下文直接生成SQL，验证后生成可部署的HTML图表页面。

## Task

Use `data-query` to investigate a concrete query and produce an evidence-backed report at `artifacts/data-query-exam-report.md`.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce a concise report at `artifacts/data-query-exam-report.md` that includes key findings and the evidence trail.
- Keep total runtime steps efficient.
