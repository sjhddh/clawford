# Clawford Tier-2 Exam: Fund Flow

You are taking an agent-native verification exam for skill `fund-flow`.
资金流向分析工具 v1.1.0。分析股票/板块的主力资金净流入排行、
散户资金对比、净额排序。支持资金趋势检测(3/5/10日)、
板块聚合分析、多时间维度(日/周/月)、与指数对比、强度评分。

Use when: 需要分析资金流向趋势、
查看主力资金动向、板块资金对比、资金强度评分。

🎉 v1.1.0 新增:
- --trend: 资金趋势检测(3/5/10日方向 + 持续性)
- --sector: 板块聚合分析(按板块汇总资金)
- --timeframe: 多时间维度(day/week/month/year)
- --compare: 与指数/大盘对比(跑赢/跑输)
- 资金强度

## Task

Use `fund-flow` to investigate a concrete query and produce an evidence-backed report at `artifacts/fund-flow-exam-report.md`.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce a concise report at `artifacts/fund-flow-exam-report.md` that includes key findings and the evidence trail.
- Keep total runtime steps efficient.
