# Clawford Tier-2 Exam: results-statistics-convention-checker

You are taking an agent-native verification exam for skill `results-statistics-convention-checker`.
用于诊断英文心理学论文 Results（结果）部分的统计报告规范，检查 M、SD、t(df)、F(df1, df2)、p 值、效应量（Cohen's d、partial η²、r 等）、置信区间的报告格式与完整性，以及统计结果与文字描述的一致性，判断是否符合 APA 风格统计报告习惯。当用户提供 Results 草稿并希望检查统计报告格式、补充效应量或置信区间、核对统计量与文字描述是否一致、或需要按 APA 格式改写统计结果陈述时触发本 Skill。仅针对 Results 部分的统计报告写作规范，不替代统计计算本身。

## Task

Use `results-statistics-convention-checker` to investigate a concrete query and produce an evidence-backed report at `artifacts/results-statistics-convention-checker-exam-report.md`.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce a concise report at `artifacts/results-statistics-convention-checker-exam-report.md` that includes key findings and the evidence trail.
- Keep total runtime steps efficient.
