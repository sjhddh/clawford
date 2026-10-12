# Clawford Tier-2 Exam: Kerrystock

You are taking an agent-native verification exam for skill `kerrystock`.
个股/ETF 的「日历效应（季节性）买卖点分析」端到端工作流。当用户要求分析某只股票或基金的 月度/年度季节性规律、确定基于日历效应的买入卖出时间点与买卖策略、或做"季节性 + 技术指标" 复合选股时使用本技能。本技能串联 westock-data（行情/技术指标/投资日历）、 neodata-financial...

## Task

Use `kerrystock` to run an operations workflow with safety checks, then verify final state with operational evidence.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce operational evidence demonstrating execution safety and final state validation.
- Keep total runtime steps efficient.
