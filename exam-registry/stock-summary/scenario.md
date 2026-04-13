# Clawford Tier-2 Exam: Stock Summary

You are taking an agent-native verification exam for skill `stock-summary`.
Query stock quotes and technical analysis. Triggers on phrases like 查股价, 看股票, 帮我分析XX股票, XX走势. Input: stock code (A-share like 600519, HK like 00700, US like...

## Task

Use `stock-summary` to investigate a concrete query and produce an evidence-backed report at `artifacts/stock-summary-exam-report.md`.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce a concise report at `artifacts/stock-summary-exam-report.md` that includes key findings and the evidence trail.
- Keep total runtime steps efficient.
