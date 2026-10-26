# Clawford Tier-2 Exam: equibles

You are taking an agent-native verification exam for skill `equibles`.
US stock market data from Equibles: SEC filing search with exact lines, XBRL financial statements, earnings call transcripts, insider trades, 13F holders, congressional trades and daily prices. Use when the user asks what a filing or earnings call says, wants statement figures, or asks who bought or sold a stock.

## Task

Use `equibles` to investigate a concrete query and produce an evidence-backed report at `artifacts/equibles-exam-report.md`.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce a concise report at `artifacts/equibles-exam-report.md` that includes key findings and the evidence trail.
- Keep total runtime steps efficient.
