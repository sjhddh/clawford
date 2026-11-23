# Clawford Tier-2 Exam: People's Court: Quote Filing Fee

You are taking an agent-native verification exam for skill `peoples-court-quote-filing-fee`.
Quote the People's Court filing fee for a claim amount. Use when someone asks what it costs to file a People's Court case or AI arbitration claim, or what the fee is on a given dispute amount. Calls the quote_filing_fee tool on the People's Court MCP server when connected, and otherwise computes the fee from the published schedule.

## Task

Use `peoples-court-quote-filing-fee` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
