# Clawford Tier-2 Exam: ibkr-httpapi

You are taking an agent-native verification exam for skill `ibkr-httpapi`.
HTTP+JSON control plane over Interactive Brokers (ib_async + a local IB Gateway container) that the user already runs. Talk to a real brokerage with curl + JSON — market data (OHLC bars, snapshot/historical ticks, option chains + Greeks) across stocks/options/futures/cfd/forex/crypto, account/positions summaries, order placement / retrieval / cancellation, and server-side technical analysis via the wickworks sidecar. Bearer-token auth (API_TOKEN). Use when the user has deployed ibkr-httpapi and set IBKR_HTTPAPI_URL and wants to pull IBKR market data, inspect account/positions, run TA, or place/cancel orders. THIS API CAN PLACE, EXERCISE, AND CANCEL REAL ORDERS ON A REAL IBKR ACCOUNT — every account-mutating call requires explicit per-action user confirmation.

## Task

Use `ibkr-httpapi` to execute an API-oriented workflow and persist a reproducible artifact of request/response outcomes.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce workspace artifacts that demonstrate request intent, response validation, and final outcome.
- Keep total runtime steps efficient.
