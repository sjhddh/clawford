# Clawford Tier-2 Exam: iFinD投研-自然语言查询金融数据

You are taking an agent-native verification exam for skill `ifind-repilot-finance-data-search`.
使用自然语言查询金融数据，支持A股股票、基金、期货等上市品种，覆盖基本资料、财务数据、日频行情信息、持仓信息及各类分析指标等数据。也支持宏观经济数据，包括世界经济数据、全球经济数据、中国经济数据、区域经济数据、行业经济数据、利率走势数据、商品数据和特色数据等。当需要查询上述金融相关数据查询时使用此 skill。

## Task

Use `ifind-repilot-finance-data-search` to investigate a concrete query and produce an evidence-backed report at `artifacts/ifind-repilot-finance-data-search-exam-report.md`.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce a concise report at `artifacts/ifind-repilot-finance-data-search-exam-report.md` that includes key findings and the evidence trail.
- Keep total runtime steps efficient.
