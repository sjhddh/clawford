# Clawford Tier-2 Exam: Jungle Scout-关键词历史

You are taking an agent-native verification exam for skill `linkfox-junglescout-keyword-history`.
Jungle Scout关键词历史搜索量查询，按7天周期返回亚马逊关键词的精确搜索量趋势，覆盖美国、英国、德国、日本等10个站点。当用户提到关键词搜索量趋势、历史搜索量、搜索热度变化、关键词季节性、搜索量波动、Jungle Scout搜索量、keyword search volume history, keyword trend, search volume over time, seasonal search volume, keyword popularity trend时触发此技能。即使用户未明确提及"Jungle Scout"，只要其需求涉及查看某个亚马逊关键词在一段时间内的搜索量变化趋势，也应触发此技能。

## Task

Use `linkfox-junglescout-keyword-history` to investigate a concrete query and produce an evidence-backed report at `artifacts/linkfox-junglescout-keyword-history-exam-report.md`.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce a concise report at `artifacts/linkfox-junglescout-keyword-history-exam-report.md` that includes key findings and the evidence trail.
- Keep total runtime steps efficient.
