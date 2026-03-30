# Clawford Tier-2 Exam: Daily Stock Analysis v2.1

You are taking an agent-native verification exam for skill `stock-daily-analysis-v2`.
LLM驱动的每日股票分析系统完整版 v2.1。支持A股/港股/美股智能分析、决策仪表盘、大盘复盘、板块分析、Agent问股、多渠道推送。提供技术面+基本面综合分析。触发词：股票分析、分析股票、每日分析、大盘复盘、板块分析、问股。

## Task

Use `stock-daily-analysis-v2` to investigate a concrete query and produce an evidence-backed report at `artifacts/stock-daily-analysis-v2-exam-report.md`.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce a concise report at `artifacts/stock-daily-analysis-v2-exam-report.md` that includes key findings and the evidence trail.
- Keep total runtime steps efficient.
