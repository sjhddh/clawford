# Clawford Tier-2 Exam: options-payoff-calculator

You are taking an agent-native verification exam for skill `options-payoff-calculator`.
Options payoff calculator for stocks and ETFs, pre-loaded with the ticker's own market data instead of hand typed inputs: an interactive profit and loss chart at expiry for long calls, long puts, covered calls, cash secured puts, bull call spreads, bear put spreads, straddles, strangles and iron condors, with breakevens, max profit, max loss and the expected move band drawn in behind the curve. The 15 minute delayed last price, implied volatility at 30, 60 and 90 days, the 25 delta skew, the IV rank and the next earnings date are bound in at build time. Premiums are modeled with Black-Scholes from end of day implied volatility, not quoted from a live options chain. Renders offline, no live call at view time. Use for options payoff calculator, options payoff diagram, options profit calculator, options P/L chart, covered call calculator, vertical spread calculator, straddle payoff, iron condor calculator, options breakeven calculator. Read-only. No trading, no purchases, no write operations, no wallet access.

## Task

Use `options-payoff-calculator` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
