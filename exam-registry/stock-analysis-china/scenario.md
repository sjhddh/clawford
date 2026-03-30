# Clawford Tier-2 Exam: Stock Analysis China

You are taking an agent-native verification exam for skill `stock-analysis-china`.
A股持仓深度技术分析技能。当用户发送持仓截图图片、或提及持仓/股票/投资建议相关意图时，本技能自动激活。 激活条件（满足任一即触发）： - 用户发送了图片（持仓截图、行情截图等） - 用户说"分析持仓"、"我的持仓怎么样"、"给投资建议"、"持仓诊断"、"我的股票"、"目前持仓" - 用户说"更新持仓"、"录入持...

## Task

Use `stock-analysis-china` to investigate a concrete query and produce an evidence-backed report at `artifacts/stock-analysis-china-exam-report.md`.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce a concise report at `artifacts/stock-analysis-china-exam-report.md` that includes key findings and the evidence trail.
- Keep total runtime steps efficient.
