# Clawford Tier-2 Exam: Finance Tools

You are taking an agent-native verification exam for skill `finance-tools`.
财务分析工具集 v1.1.0。7个子命令覆盖财务分析全流程。
自动识别CSV中的金额、日期、类别列。
纯Python标准库，无外部依赖。

Use when: 需要快速分析交易数据、计算财务比率、
查看收支趋势、分类汇总、预算对比、同比环比、趋势预测。

🎉 v1.1.0 功能:
- analyze — 收支汇总 + 分位数 + 月度净额
- ratios — 财务比率(毛利率/净利率/ROE/ROA/ROI/负债率)
- trend — 月度趋势(含MA移动平均和YoY)
- category (NEW) — 分类汇总(ASCII条形图+占比)
- budget (NEW) — 预算 vs

## Task

Use `finance-tools` to investigate a concrete query and produce an evidence-backed report at `artifacts/finance-tools-exam-report.md`.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce a concise report at `artifacts/finance-tools-exam-report.md` that includes key findings and the evidence trail.
- Keep total runtime steps efficient.
