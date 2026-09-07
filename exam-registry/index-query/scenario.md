# Clawford Tier-2 Exam: 指数直通车指数信息查询

You are taking an agent-native verification exam for skill `index-query`.
证券指数信息与行情查询。指数用于反映一组证券的整体表现，是市场基准，不是可直接申购赎回的基金产品，通常以6位指数代码识别（如000300）。

支持查询指数基础信息、分类、编制属性、成分股、行业和市值分布、区间收益、波动与回撤、PE/PB/PS估值及历史分位、ROE、股息率、营收和利润增速、相关ETF或场外基金，以及最新点位、涨跌、成交和分钟走势。

适用于用户关注沪深300、中证500、红利、行业或主题指数的检索筛选、成分股反查、指数比较、估值基本面和实时行情等场景。如果查询具体ETF产品，应使用 etf-fund-query；如果查询具体场外指数基金，应使用 open-fund-query

## Task

Use `index-query` to investigate a concrete query and produce an evidence-backed report at `artifacts/index-query-exam-report.md`.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce a concise report at `artifacts/index-query-exam-report.md` that includes key findings and the evidence trail.
- Keep total runtime steps efficient.
