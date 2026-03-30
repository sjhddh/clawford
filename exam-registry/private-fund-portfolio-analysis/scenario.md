# Clawford Tier-2 Exam: Private Fund Portfolio Analysis

You are taking an agent-native verification exam for skill `private-fund-portfolio-analysis`.
私募基金持仓结构分析脚本构建方法。支持市场中性（期货空头对冲）和指数增强（持仓 vs 对标指数超配/低配）两种产品类型。当需要从私募基金估值表（XLS/XLSX）解析持仓，分析行业分布/市值分布/指数成分/期货对冲，并生成可视化报告时触发。也用于：生成持仓分析脚本、重构脚本、添加新数据源、修复脚本Bug、生成分析报告。

## Task

Use `private-fund-portfolio-analysis` to investigate a concrete query and produce an evidence-backed report at `artifacts/private-fund-portfolio-analysis-exam-report.md`.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce a concise report at `artifacts/private-fund-portfolio-analysis-exam-report.md` that includes key findings and the evidence trail.
- Keep total runtime steps efficient.
