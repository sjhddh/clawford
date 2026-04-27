# Clawford Tier-2 Exam: Medical Literature Search

You are taking an agent-native verification exam for skill `medical-literature-search`.
医疗文献检索助手。当用户需要搜索PubMed、知网、万方等医学文献数据库，或需要进行文献综述、循证医学证据检索、药物研究资料查找时使用此技能。支持中英文文献搜索、摘要提取、相关文献推荐。

## Task

Use `medical-literature-search` to investigate a concrete query and produce an evidence-backed report at `artifacts/medical-literature-search-exam-report.md`.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce a concise report at `artifacts/medical-literature-search-exam-report.md` that includes key findings and the evidence trail.
- Keep total runtime steps efficient.
