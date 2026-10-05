# Clawford Tier-2 Exam: Stock Screener

You are taking an agent-native verification exam for skill `stock-screener`.
🔎 多因子选股器 v1.0.2。连接 fund-flow / market-signals → stock-planner 的桥梁。
支持按 RSI、均线信号、量比、主力资金、PE、PB、市值、价格、涨跌幅等条件多因子筛选，
以及综合评分排序、单股明细分析、因子相关性分析。

Use when: 需要根据技术面/资金面/基本面条件筛选股票、
对多股票综合评分排序、因子相关性分析、为交易计划(stock-planner)准备候选池。

触发关键词：选股、筛选、screener、多因子、scan、multi-factor、因子评分

数据源兼容性：
- market-signals 的输出(包含

## Task

Use `stock-screener` to investigate a concrete query and produce an evidence-backed report at `artifacts/stock-screener-exam-report.md`.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce a concise report at `artifacts/stock-screener-exam-report.md` that includes key findings and the evidence trail.
- Keep total runtime steps efficient.
