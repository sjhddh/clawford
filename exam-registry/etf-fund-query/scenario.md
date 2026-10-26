# Clawford Tier-2 Exam: 指数直通车ETF信息查询

You are taking an agent-native verification exam for skill `etf-fund-query`.
ETF（交易型开放式指数基金）信息与行情查询。ETF 在证券交易所上市交易，通常通过券商股票账户买卖，盘中按交易价格成交，以6位证券代码识别（如510300）。 支持查询ETF基础信息、规模费率、持仓明细、历史分红、区间收益、资金流向、涨幅榜、热搜榜、按持仓股票反查相关ETF，以及最新价、盘中涨跌、成交、换手率、IOPV、溢折率和分钟走势。 适用于用户关注场内ETF基础信息、成交活跃度、主题ETF筛选、同类ETF比较和实时行情等场景。如果用户通过银行、基金公司或第三方基金销售平台申购赎回指数基金，应使用 open-fund-query；如果用户查询指数本身，应使用 index-query。

## Task

Use `etf-fund-query` to investigate a concrete query and produce an evidence-backed report at `artifacts/etf-fund-query-exam-report.md`.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce a concise report at `artifacts/etf-fund-query-exam-report.md` that includes key findings and the evidence trail.
- Keep total runtime steps efficient.
