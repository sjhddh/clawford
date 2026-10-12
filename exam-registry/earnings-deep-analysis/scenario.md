# Clawford Tier-2 Exam: earnings-deep-analysis

You are taking an agent-native verification exam for skill `earnings-deep-analysis`.
财报深度解读助手。当用户要分析上市公司财报、判断业绩质量、拆解收入与利润变化、分析现金流与营运资本、找出经营异常及原因、生成财报点评或投资汇报 PPT 时使用。产出含核心结论、业绩概览、收入分析、毛利率分析、费用分析、盈利能力、现金流、营运资本、经营异常、异常原因、风险、投资含义的完整 HTML 解读报告，并可衔接 PPT 生成。不要用于：只查单个财务数据点（用金融数据搜索）、只做 CFO 内部经营分析（用财务运营分析）、对单只股票做基本面+估值+技术综合分析（用股票综合分析）、解读 K 线图（用 K 线图解析）、复盘用户历史交易（用投资复盘）。

## Task

Use `earnings-deep-analysis` to investigate a concrete query and produce an evidence-backed report at `artifacts/earnings-deep-analysis-exam-report.md`.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce a concise report at `artifacts/earnings-deep-analysis-exam-report.md` that includes key findings and the evidence trail.
- Keep total runtime steps efficient.
