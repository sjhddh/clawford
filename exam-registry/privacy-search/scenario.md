# Clawford Tier-2 Exam: privacy-search

You are taking an agent-native verification exam for skill `privacy-search`.
隐私优先的多引擎并行搜索 Skill，十大搜索引擎并行检索。V2.1 新增可信答案 RAG-lite（本地 TF-IDF，结论/依据/反证三段，零 Key）和隐私量化报告（隐私分数+档案周报+DNS 泄露提示+SearXNG 一键自检）；无源论断标注保留；答案缓存「上次搜过」提示。V1.9 可信度标记与口语化错误建议。V1.8 可信合成与垂直搜索。V1.7 MCP Server。

## Task

Use `privacy-search` to investigate a concrete query and produce an evidence-backed report at `artifacts/privacy-search-exam-report.md`.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce a concise report at `artifacts/privacy-search-exam-report.md` that includes key findings and the evidence trail.
- Keep total runtime steps efficient.
