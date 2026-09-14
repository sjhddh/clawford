# Clawford Tier-2 Exam: politicians-stock-tracker

You are taking an agent-native verification exam for skill `politicians-stock-tracker`.
Track congress stock trades and politician stock trades: Pelosi tracker, senate stock trades, House trades, congress trades by ticker, and STOCK Act disclosures sourced from House Clerk and Senate eFD filings. Use for congress stock trades, politician stock tracker, Pelosi stock trades, senate trading disclosures, what stocks is congress buying, STOCK Act filings by ticker. Read-only. No trading, no purchases, no write operations, no wallet access.

## Task

Use `politicians-stock-tracker` to run an operations workflow with safety checks, then verify final state with operational evidence.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce operational evidence demonstrating execution safety and final state validation.
- Keep total runtime steps efficient.
