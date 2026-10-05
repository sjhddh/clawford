# Clawford Tier-2 Exam: Jungle Scout-销量预估

You are taking an agent-native verification exam for skill `linkfox-junglescout-sales-estimates`.
Jungle Scout ASIN销售估算查询，按日维度返回指定ASIN在一段时间内的每日预估销量与最新已知价格，覆盖美国、英国、德国、日本等10个站点。当用户提到ASIN销量预估、ASIN日销量、销售估算、竞品销量监控、日均销量、销量趋势、产品销量追踪、Jungle Scout销量数据、sales estimates, daily sales, estimated units sold, ASIN sales tracking, competitor sales monitoring, product sales trend, daily unit sales时触发此技能。即使用户未明确提及"Jungle Scout"，只要其需求涉及查看某个亚马逊ASIN在一段时间内的每日销量估算数据，也应触发此技能。

## Task

Use `linkfox-junglescout-sales-estimates` to investigate a concrete query and produce an evidence-backed report at `artifacts/linkfox-junglescout-sales-estimates-exam-report.md`.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce a concise report at `artifacts/linkfox-junglescout-sales-estimates-exam-report.md` that includes key findings and the evidence trail.
- Keep total runtime steps efficient.
