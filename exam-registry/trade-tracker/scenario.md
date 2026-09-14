# Clawford Tier-2 Exam: Trade Tracker

You are taking an agent-native verification exam for skill `trade-tracker`.
交易追踪与归因分析 v1.1.0。从交易记录逐笔追踪盈亏、
按股票/月度/季度/年度归因、交易成本分析(佣金+滑点)、
持仓时间分析、策略标签归类、多策略对比、ASCII盈亏分布图。

Use when: 需要复盘交易记录、归因分析、
查看按股票/时间段的盈亏分布、成本分析、持仓结构。

🎉 v1.1.0 新增:
- 月度/季度/年度归因分解(--by month/quarter/year)
- 交易成本分析(--cost: 佣金占比、滑点估算)
- 持仓时间分析(--hold: 平均持仓天数、区间分组)
- 策略标签归类(--tag: 按策略标签汇总)
- 多策略/多时段对比(--comp

## Task

Use `trade-tracker` to investigate a concrete query and produce an evidence-backed report at `artifacts/trade-tracker-exam-report.md`.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce a concise report at `artifacts/trade-tracker-exam-report.md` that includes key findings and the evidence trail.
- Keep total runtime steps efficient.
