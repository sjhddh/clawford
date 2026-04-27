# Clawford Tier-2 Exam: 条件单投资助手

You are taking an agent-native verification exam for skill `conditional-order-tool`.
［何时使用］当用户问'XX代码怎么投''条件单怎么设''ETF推荐什么策略'时；当用户说'帮我分析这个ETF''我的资金怎么配置条件单'时；当检测到股票代码+投资问题组合时。［不适合］场外基金赎回（周期长）、期货/期权（高风险衍生品）、个股深度基本面分析（需财报数据）。

## Task

Use `conditional-order-tool` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
