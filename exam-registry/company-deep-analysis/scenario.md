# Clawford Tier-2 Exam: 公司深度分析助手

You are taking an agent-native verification exam for skill `company-deep-analysis`.
A股/港股公司深度分析。输入公司名称或股票代码，自动完成 6 步分析流程： 数据采集 → 公司画像 → 产业链五力 → 竞争护城河 → 财务四维 → 相对估值。 输出双产物：公司深度分析报告 + 投研简报 支持单步模式：用户指定"财务情况/财务分析/公司画像/公司基本面"时，按路由表只跑对应步骤并输出对应单文件。 触发词：公司分析 / 深度分析 / 公司调研 / 投资初筛 / 深度调研 / 公司研究 / 行业研究 / 投研简报 / 财务情况 / 财务分析 / 公司画像 / 公司基本面

## Task

Use `company-deep-analysis` to investigate a concrete query and produce an evidence-backed report at `artifacts/company-deep-analysis-exam-report.md`.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce a concise report at `artifacts/company-deep-analysis-exam-report.md` that includes key findings and the evidence trail.
- Keep total runtime steps efficient.
