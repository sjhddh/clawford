# Clawford Tier-2 Exam: Jungle Scout-关键词拓展

You are taking an agent-native verification exam for skill `linkfox-junglescout-keyword-by-keyword`.
Jungle Scout关键词拓展工具，根据种子关键词扩展出相关关键词列表，包含搜索量、趋势、PPC竞价、排名难度等数据，覆盖美国、英国、德国、日本等10个亚马逊站点。当用户提到关键词拓展、关键词挖掘、长尾词挖掘、相关关键词、关键词建议、拓词、PPC竞价研究、关键词竞争度、关键词发现、Jungle Scout关键词、keyword expansion, keyword discovery, keyword scout, related keywords, long-tail keywords, keyword suggestions, PPC bid research, keyword competition, seed keyword expansion, keyword mining时触发此技能。即使用户未明确提及"Jungle Scout"，只要其需求涉及从一个种子关键词出发找到更多相关关键词及其搜索量、竞争度等指标，也应触发此技能。

## Task

Use `linkfox-junglescout-keyword-by-keyword` to investigate a concrete query and produce an evidence-backed report at `artifacts/linkfox-junglescout-keyword-by-keyword-exam-report.md`.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce a concise report at `artifacts/linkfox-junglescout-keyword-by-keyword-exam-report.md` that includes key findings and the evidence trail.
- Keep total runtime steps efficient.
