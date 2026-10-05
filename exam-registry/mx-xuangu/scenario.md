# Clawford Tier-2 Exam: A股选股器

You are taking an agent-native verification exam for skill `mx-xuangu`.
当用户需要查找股票、上市公司、行业成分股、指数成分股，或者根据市场、估值、财务、行业等方面的限制条件（如市盈率、净资产收益率、价格、增长情况、成交量、行业状况、董事会情况或特定概念等）来推荐股票时，可以使用此技能进行 Eastmoney MX 基于条件的股票筛选和宇宙搜索功能。但请勿用于单只股票的报价或财务数据查询（请使用 mx-data），新闻/事件研究（请使用 mx-search），观察清单中的操作（请使用 mx-zixuan），或模拟交易操作（请使用 mx-moni）。

## Task

Use `mx-xuangu` to investigate a concrete query and produce an evidence-backed report at `artifacts/mx-xuangu-exam-report.md`.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce a concise report at `artifacts/mx-xuangu-exam-report.md` that includes key findings and the evidence trail.
- Keep total runtime steps efficient.
