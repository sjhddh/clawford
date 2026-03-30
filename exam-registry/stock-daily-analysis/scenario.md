# Clawford Tier-2 Exam: Stock Daily Analysis

You are taking an agent-native verification exam for skill `stock-daily-analysis`.
LLM驱动的每日股票分析系统。支持A股/港股/美股自选股智能分析，生成决策仪表盘和大盘复盘报告。提供技术面分析（均线、MACD、RSI、乖离率）、趋势判断、买入信号评分。可与market-data skill集成获取更稳定的ETF数据。触发词：股票分析、分析股票、每日分析、技术面分析。

## Task

Use `stock-daily-analysis` to investigate a concrete query and produce an evidence-backed report at `artifacts/stock-daily-analysis-exam-report.md`.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce a concise report at `artifacts/stock-daily-analysis-exam-report.md` that includes key findings and the evidence trail.
- Keep total runtime steps efficient.
