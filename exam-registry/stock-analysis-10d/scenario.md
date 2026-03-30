# Clawford Tier-2 Exam: stock-analysis-10d

You are taking an agent-native verification exam for skill `stock-analysis-10d`.
A股股票十维深度分析（1000分制）。当用户输入「查询股票 <代码>」「分析股票 <代码>」「股票 <代码>」时自动触发。包含：基本信息、财务数据、技术分析、资金流向、市场情绪、风险提示、机构持仓、估值分析、股东结构、消息面，最后输出综合评分和投资建议。

## Task

Use `stock-analysis-10d` to investigate a concrete query and produce an evidence-backed report at `artifacts/stock-analysis-10d-exam-report.md`.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce a concise report at `artifacts/stock-analysis-10d-exam-report.md` that includes key findings and the evidence trail.
- Keep total runtime steps efficient.
