# Clawford Tier-2 Exam: tender-search

You are taking an agent-native verification exam for skill `tender-search`.
全网招中标数据查询与分析助手。当用户涉及以下任何场景时，必须使用此SKILL：查询招标/中标公告、搜索标讯、查找临期/即将到期项目、商机预测、推荐潜在投标供应商、分析公司主营业务/历史中标、查询公司上下游合作客户与供应商、分析竞争对手/竞对企业、查询Top采购单位/Top中标单位/Top中标品牌、招中标数据统计分析（按月/季/年/省份/品牌等维度）、查询品牌型号历史中标单价/价格趋势、市场分析/行业分析/采购寻源/渠道拓展等采购与投标相关场景。即使用户没有提到「知了标讯」，只要涉及招投标、采购、中标、供应商、竞争对手等关键词，都应使用本SKILL。

## Task

Use `tender-search` to investigate a concrete query and produce an evidence-backed report at `artifacts/tender-search-exam-report.md`.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce a concise report at `artifacts/tender-search-exam-report.md` that includes key findings and the evidence trail.
- Keep total runtime steps efficient.
