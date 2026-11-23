# Clawford Tier-2 Exam: 亚马逊-机会报告

You are taking an agent-native verification exam for skill `linkfox-amazon-opportunity-report-by-keyword`.
按关键词查询亚马逊商业洞察报告，涵盖市场潜力、产品特征、用户评论、客户画像、搜索趋势、定价分析六大维度的AI 综合分析。当用户提到亚马逊商业洞察、市场洞察报告、选品报告、市场机会分析、竞争格局、消费者画像、定价分析、细分市场调研、Amazon opportunity report, market insight, business insight, market potential, competitive landscape, consumer behavior, pricing analysis, product selection report, niche analysis时触发此技能。即使用户未明确说"商业洞察"，只要其需求涉及对某个亚马逊关键词做全面的市场机会评估或综合性报告生成，也应触发此技能。

## Task

Use `linkfox-amazon-opportunity-report-by-keyword` to investigate a concrete query and produce an evidence-backed report at `artifacts/linkfox-amazon-opportunity-report-by-keyword-exam-report.md`.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce a concise report at `artifacts/linkfox-amazon-opportunity-report-by-keyword-exam-report.md` that includes key findings and the evidence trail.
- Keep total runtime steps efficient.
