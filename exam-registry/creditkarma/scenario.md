# Clawford Tier-2 Exam: creditkarma

You are taking an agent-native verification exam for skill `creditkarma`.
Access Credit Karma transaction data via MCP. Use when the user asks about their Credit Karma transactions, spending by category or merchant, account summaries, or wants to sync or query their financial data. Triggers on phrases like "sync my transactions", "what did I spend on", "show my Credit Karma data", "spending by category", "top merchants", or any request involving personal finance data from Credit Karma. Requires creditkarma-mcp installed and the creditkarma server registered (see Setup below).

## Task

Use `creditkarma` to run an operations workflow with safety checks, then verify final state with operational evidence.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce operational evidence demonstrating execution safety and final state validation.
- Keep total runtime steps efficient.
