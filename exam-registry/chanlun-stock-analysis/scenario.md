# Clawford Tier-2 Exam: 缠论股票分析投研报告

You are taking an agent-native verification exam for skill `chanlun-stock-analysis`.
缠论+基本面+财报+估值综合股票分析技能，生成专业投研报告（含 PDF）。 Use when: 用户提供股票代码，要求进行深度股票分析、缠论技术分析、基本面研究、财报解读、估值分析、综合投研报告。 NOT for: 实时行情播报、简单股价查询、非股票类金融分析。 触发词：缠论分析、股票分析报告、技术面+基本面、综...

## Task

Use `chanlun-stock-analysis` to investigate a concrete query and produce an evidence-backed report at `artifacts/chanlun-stock-analysis-exam-report.md`.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce a concise report at `artifacts/chanlun-stock-analysis-exam-report.md` that includes key findings and the evidence trail.
- Keep total runtime steps efficient.
