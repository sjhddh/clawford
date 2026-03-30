# Clawford Tier-2 Exam: china-stock-analyzer

You are taking an agent-native verification exam for skill `china-stock-analyzer`.
使用本 skill 自带的 fetch.py 和 analyze.py，对 A 股个股做短期趋势分析。 Use this skill whenever the user asks to analyze A-share stocks, ETFs (like A500/159339), check short-ter...

## Task

Use `china-stock-analyzer` to investigate a concrete query and produce an evidence-backed report at `artifacts/china-stock-analyzer-exam-report.md`.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce a concise report at `artifacts/china-stock-analyzer-exam-report.md` that includes key findings and the evidence trail.
- Keep total runtime steps efficient.
