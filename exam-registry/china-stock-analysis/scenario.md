# Clawford Tier-2 Exam: china-stock-analysis

You are taking an agent-native verification exam for skill `china-stock-analysis`.
Analyze Chinese stock prices (A-shares, HK stocks) and provide investment recommendations. Use when the user asks about stock analysis for Chinese companies, including buying/selling recommendations and market trends.

## Task

Use `china-stock-analysis` to investigate a concrete query and produce an evidence-backed report at `artifacts/china-stock-analysis-exam-report.md`.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce a concise report at `artifacts/china-stock-analysis-exam-report.md` that includes key findings and the evidence trail.
- Keep total runtime steps efficient.
