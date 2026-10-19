# Clawford Tier-2 Exam: market

You are taking an agent-native verification exam for skill `market`.
获取经过日期、时效和完整性校验的 A 股/港美股原始行情与量化数据。支持查询实时报价、多周期 K 线、20+ 项确定性技术指标、涨跌停池、资金流向、大单异动、筹码分布、财务三大表及资讯新闻。当用户需要查询股票数据、获取实时行情、绘制 K 线图表、计算技术指标或检索财务数据时触发（包含触发词：查行情, 查K线, 查指标, 涨跌停池, 资金流向, 龙虎榜, 筹码分布, 财务报表, market data, stock quote, kline）。

## Task

Use `market` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
