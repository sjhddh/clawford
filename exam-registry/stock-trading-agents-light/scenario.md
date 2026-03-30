# Clawford Tier-2 Exam: Trading Agents 简化版

You are taking an agent-native verification exam for skill `stock-trading-agents-light`.
多智能体股票交易信号分析框架。当用户提供股票代码要求分析投资建议时触发。输入一只股票代码，通过7个SubAgent协作分析（基本面研究员、市场信息研究员、新闻研究员、社交媒体研究员、看涨分析师、看跌分析师、投资组合经理），输出买入/卖出/持有建议及决策依据。触发词："分析这只股票"、"给我投资建议"、"这只票值得...

## Task

Use `stock-trading-agents-light` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
