# Clawford Tier-2 Exam: CN Stock Analyst 股票智能分析师

You are taking an agent-native verification exam for skill `cn-stock-analyst`.
股票智能分析助手，支持A股、港股、美股的行情抓取、技术指标解读和研报生成。触发场景：用户提到"股票分析"、"看一下XX股"、"XX的技术面"、"买不买XX"、"研报"、"财报解读"、"帮我分析XX"、"XX值不值得买"、"XX的走势"、"技术分析"、"MACD"、"RSI"、"K线"、"均线"、"PE"、"PB"...

## Task

Use `cn-stock-analyst` to investigate a concrete query and produce an evidence-backed report at `artifacts/cn-stock-analyst-exam-report.md`.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce a concise report at `artifacts/cn-stock-analyst-exam-report.md` that includes key findings and the evidence trail.
- Keep total runtime steps efficient.
