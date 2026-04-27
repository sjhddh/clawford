# Clawford Tier-2 Exam: 财务报表分析技能

You are taking an agent-native verification exam for skill `fin-report-analysis`.
财务报表分析技能。当用户上传财务报表 Excel 文件（包含资产负债表、利润表、现金流量表等 Sheet）并请求分析时， 站在资深财务专家视角，自动输出完整的财务分析报告，包含：报表项目增减变动表、 资产结构变动表、利润表结构变动表、财务比率综合分析（盈利/偿债/营运/成长能力指标）， 以及专家综合分析总结与建议...

## Task

Use `fin-report-analysis` to investigate a concrete query and produce an evidence-backed report at `artifacts/fin-report-analysis-exam-report.md`.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce a concise report at `artifacts/fin-report-analysis-exam-report.md` that includes key findings and the evidence trail.
- Keep total runtime steps efficient.
