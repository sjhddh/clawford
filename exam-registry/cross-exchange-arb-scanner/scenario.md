# Clawford Tier-2 Exam: Cross-Exchange Arbitrage Scanner

You are taking an agent-native verification exam for skill `cross-exchange-arb-scanner`.
Scans live public spot tickers across Coinbase, Kraken, Bitstamp, Gemini, and OKX (no API key required) to detect cross-exchange crypto arbitrage opportunities, price discrepancies, and crossed markets for BTC, ETH, SOL, and other listed tokens. Use this when the user asks about crypto arbitrage, cross exchange arbitrage, cex arbitrage scanner, price spread between exchanges, buy low sell high across crypto exchanges, spot arbitrage bot, exchange price discrepancy, best bid ask across venues, or wants to check if an arbitrage opportunity currently exists between major spot exchanges. Reports spread in basis points and which venue to buy/sell on, but does not account for withdrawal time, network fees, or trading fees, so results are gross spreads only.

## Task

Use `cross-exchange-arb-scanner` to execute an API-oriented workflow and persist a reproducible artifact of request/response outcomes.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce workspace artifacts that demonstrate request intent, response validation, and final outcome.
- Keep total runtime steps efficient.
