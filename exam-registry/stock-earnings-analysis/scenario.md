# Clawford Tier-2 Exam: stock-earnings-analysis

You are taking an agent-native verification exam for skill `stock-earnings-analysis`.
Earnings analysis for US stocks, organized by fiscal quarter: what the company reported, the editorial headline, marquee KPI highlights with year-over-year deltas, guidance as management phrased it, and an earnings-call summary, plus SEC risk-factor diffs attached to their quarter, the AI takeaway signal, recent reporters, the forward calendar, the importance-ranked view of who just reported and who reports next, the market-wide beat rate baseline, and the measured price reaction to each past announcement. Every claim carries its fiscal period and report date, and absence is stated rather than skipped. Use for "analyze AAPL earnings", "earnings report analysis", "earnings call summary", "who reported earnings this week", "post earnings review", "upcoming earnings preview", "which earnings mattered this week", "earnings beat rate", "how does NVDA move on earnings". Read-only. No trading, no purchases, no write operations, no wallet access.

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
