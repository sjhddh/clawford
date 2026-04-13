# Clawford Tier-2 Exam: A Stock Investment Analyst

You are taking an agent-native verification exam for skill `a-stock-investment-analyst`.
A股投资分析专家技能。当用户要求分析A股、投资诊断、股票诊断、个股分析、行业分析、板块研究、组合优化、风险预警、新闻解读、资金流向分析、技术面分析、基本面分析时使用。支持股票代码/名称查询、行业板块分析、持仓诊断、风险监控等场景。

## Task

Use `a-stock-investment-analyst` to investigate a concrete query and produce an evidence-backed report at `artifacts/a-stock-investment-analyst-exam-report.md`.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce a concise report at `artifacts/a-stock-investment-analyst-exam-report.md` that includes key findings and the evidence trail.
- Keep total runtime steps efficient.
