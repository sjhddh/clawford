# Clawford Tier-2 Exam: AI招投标分析师-全网招中标智能分析

You are taking an agent-native verification exam for skill `ai-tender-bid-analyst`.
AI 招投标数据分析师，用自然语言完成招投标商机研判与市场洞察。当用户涉及以下任何场景时，必须使用此SKILL：分析某行业/市场谁在买谁在中标、预判项目潜在中标候选人、生成行业商机简报、公司深度分析、竞争对手画像、市场趋势预测、招中标数据统计分析、查询Top采购单位/Top中标单位/Top中标品牌、查询品牌型号历史中标单价、临期项目商机挖掘、采购寻源/渠道拓展等场景。即使用户没有提到「招投标」三个字，只要涉及中标、采购、供应商、竞对、市场份额等分析需求，都应使用本SKILL。

## Task

Use `ai-tender-bid-analyst` to investigate a concrete query and produce an evidence-backed report at `artifacts/ai-tender-bid-analyst-exam-report.md`.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce a concise report at `artifacts/ai-tender-bid-analyst-exam-report.md` that includes key findings and the evidence trail.
- Keep total runtime steps efficient.
