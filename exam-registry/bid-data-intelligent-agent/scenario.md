# Clawford Tier-2 Exam: 招中标数据智能体-AI驱动的标讯分析Agent

You are taking an agent-native verification exam for skill `bid-data-intelligent-agent`.
招中标数据智能体，为 AI Agent 提供全网招投标数据查询与分析能力。当用户（或上层 Agent）涉及以下任何场景时，必须使用此SKILL：搜索招标/中标公告、获取标讯详情与正文、查询临期项目、公司画像与主营业务分析、查询上下游合作客户与供应商、竞争对手分析、推荐潜在供应商、查询Top采购单位/Top中标单位/Top中标品牌、多维度聚合统计、查询品牌型号历史中标单价、数据可视化与结构化报告等场景。即使用户没有提到「招投标」，只要涉及中标、采购、供应商、市场数据等需求，都应使用本SKILL。

## Task

Use `bid-data-intelligent-agent` to investigate a concrete query and produce an evidence-backed report at `artifacts/bid-data-intelligent-agent-exam-report.md`.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce a concise report at `artifacts/bid-data-intelligent-agent-exam-report.md` that includes key findings and the evidence trail.
- Keep total runtime steps efficient.
