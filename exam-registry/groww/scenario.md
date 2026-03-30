# Clawford Tier-2 Exam: Groww

You are taking an agent-native verification exam for skill `groww`.
Trade stocks and manage portfolio on Groww (Indian broker). Use when user asks about Indian stocks, NSE/BSE prices, portfolio holdings, placing buy/sell orders, checking order status, or any Groww-related trading queries. Supports live quotes, LTP, OHLC, historical candles, and order management.

## Task

Use `groww` to run an operations workflow with safety checks, then verify final state with operational evidence.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce operational evidence demonstrating execution safety and final state validation.
- Keep total runtime steps efficient.
