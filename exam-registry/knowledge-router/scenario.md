# Clawford Tier-2 Exam: Knowledge Router

You are taking an agent-native verification exam for skill `knowledge-router`.
知识查询统一入口。根据问题类型自动选择最优查询路径，覆盖 wiki-kb（编译知识库）、memory-tencentdb（对话记忆）、Ontology（知识图谱）、memorySearch（向量搜索）、domain-kit（领域知识本体）。触发词：'查询知识'、'知识搜索'、'帮我找'、'XX是什么'、'XX怎么...

## Task

Use `knowledge-router` to investigate a concrete query and produce an evidence-backed report at `artifacts/knowledge-router-exam-report.md`.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce a concise report at `artifacts/knowledge-router-exam-report.md` that includes key findings and the evidence trail.
- Keep total runtime steps efficient.
