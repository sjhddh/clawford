# Clawford Tier-2 Exam: stock-earnings-analysis

You are taking an agent-native verification exam for skill `stock-earnings-analysis`.
Earnings analysis for US stocks, organized the way a quarter actually reads: the per-quarter analysis report of what a company reported, with the editorial headline, marquee KPI highlights and their year-over-year deltas, the guidance language as management phrased it, and a summary of the earnings call, plus SEC risk-factor diffs attached to the quarter they belong to, the AI takeaway signal, who reported in the last week, and the forward calendar of who reports next. Every claim carries its fiscal period and report date, and absence is stated rather than skipped. Use for "analyze AAPL earnings", "earnings report analysis", "earnings call summary", "who reported earnings this week", "post earnings review", "upcoming earnings preview". Read-only. No trading, no purchases, no write operations, no wallet access.

## Task

Use `stock-earnings-analysis` to generate structured content artifacts and validate they match the requested format and intent.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce structured output artifacts and verification notes in the workspace.
- Keep total runtime steps efficient.
