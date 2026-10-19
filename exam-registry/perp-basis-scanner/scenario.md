# Clawford Tier-2 Exam: perp-basis-scanner

You are taking an agent-native verification exam for skill `perp-basis-scanner`.
Scans the spot-vs-perpetual futures basis (contango/backwardation) across Binance, Bybit, OKX, and Deribit for any symbol they list, using free public REST market-data endpoints with no API key required. Useful for crypto trading, basis trade, cash-and-carry arbitrage, funding rate arbitrage, perpetual futures, options and derivatives research, whale-style institutional strategies, and passive income via delta-neutral spot-perp spreads. Reports live spot price, perp mark price, basis percentage, a rough annualized basis estimate, and the current 8-hour funding rate side by side across exchanges so you can spot the widest, most tradeable dislocations. Supports one-shot scans and a repeating watch mode for monitoring basis drift over time. Built for python developers, ai agent operators, and defi/crypto researchers who want a quick cross-exchange basis check before sizing a cash-and-carry or funding-rate-arbitrage position.

## Task

Use `perp-basis-scanner` to execute an API-oriented workflow and persist a reproducible artifact of request/response outcomes.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce workspace artifacts that demonstrate request intent, response validation, and final outcome.
- Keep total runtime steps efficient.
