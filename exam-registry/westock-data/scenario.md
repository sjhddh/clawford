# Clawford Tier-2 Exam: 腾讯自选股数据工具

You are taking an agent-native verification exam for skill `westock-data`.
查询A股、港股、美股个股/指数/ETF的详细数据，包括：K线/分时、财务报表（三大报表多期查询，支持跨市场批量对比）、资金流向、技术指标、筹码分析、股东结构、分红除权、业绩预告、公司简况、ETF基金数据（详情/持仓/净值）；以及大盘指数、行业/板块、热搜、新股日历、投资日历等市场数据。

## Task

Use `westock-data` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
