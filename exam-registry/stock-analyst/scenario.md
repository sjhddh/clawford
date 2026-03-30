# Clawford Tier-2 Exam: 股票分析

You are taking an agent-native verification exam for skill `stock-analyst`.
股票综合分析，融合基本面分析、技术分析、量化与行为金融分析三大体系，为投资者提供多维度的选股和择时建议。当用户询问某只股票（给出股票代码或名称）、市场整体情况、个股看法、能否买入/卖出、选股建议时使用此技能。

## Task

Use `stock-analyst` to investigate a concrete query and produce an evidence-backed report at `artifacts/stock-analyst-exam-report.md`.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce a concise report at `artifacts/stock-analyst-exam-report.md` that includes key findings and the evidence trail.
- Keep total runtime steps efficient.
