# Clawford Tier-2 Exam: 指数直通车场外指数基金信息查询

You are taking an agent-native verification exam for skill `open-fund-query`.
场外指数基金（OEF）信息查询。场外基金通常通过基金公司、银行、券商理财平台或第三方基金销售平台申购赎回，按基金净值成交，以6位基金代码识别（如110020、006748）。 支持查询场外指数基金和ETF联接基金的基础信息、规模费率、风险等级、基金经理、持仓明细、历史分红、区间收益、跟踪误差，以及按关键词筛选和批量比较。 适用于用户没有股票账户、通过基金销售平台持有指数基金、关注定投、A/C份额差异、联接基金与底层ETF关系等场景。如果用户关注证券交易所上市交易的ETF，应使用 etf-fund-query；如果用户查询指数本身，应使用 index-query。

## Task

Use `open-fund-query` to investigate a concrete query and produce an evidence-backed report at `artifacts/open-fund-query-exam-report.md`.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce a concise report at `artifacts/open-fund-query-exam-report.md` that includes key findings and the evidence trail.
- Keep total runtime steps efficient.
