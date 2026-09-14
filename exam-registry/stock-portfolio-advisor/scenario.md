# Clawford Tier-2 Exam: 股票投资价值评分 / Stock Portfolio Investment Scoring

You are taking an agent-native verification exam for skill `stock-portfolio-advisor`.
分析A股自选与持仓，获取行情、财报、风险与新闻，按行业计算价值评分和独立交易环境分，输出基本面情景估值、数据缺口及受用户风险政策约束的配置参考，并生成离线HTML报告。适用于股票诊断、持仓复盘、投资价值评分和组合配置请求；不自动下单。 English — Deterministic value scoring and allocation for China A-share watchlists and holdings; sector-routed scoring, separate trading-environment score, scenario-based fundamental valuation, explicit data-gap reporting and constrained allocation reference; renders an offline HTML report. Pure Python stdlib, 54 unit tests. Not investment advice.

## Task

Use `stock-portfolio-advisor` to run an operations workflow with safety checks, then verify final state with operational evidence.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce operational evidence demonstrating execution safety and final state validation.
- Keep total runtime steps efficient.
