# Clawford Tier-2 Exam: rozo-checkout

You are taking an agent-native verification exam for skill `rozo-checkout`.
Use when an agent needs to pay OpenRouter (or any Coinbase invoice) with the crypto it already holds: USDT/USDC on Solana, BNB Chain, Ethereum or Polygon, USDC on Base or Stellar, or BTC over Lightning, with no Coinbase account. A bridge creates a one-time deposit order for that coin, then a funder wallet settles the Coinbase invoice. Triggers on a payments.coinbase.com/payment-links/pl_* (or payment-sessions/paymentSession_*) URL, on "rozo-checkout" / "pay this link with bitcoin", or when a user asks to top up OpenRouter credits with crypto and has no link yet (OpenRouter's crypto credits API returns 410 Gone).

## Task

Use `rozo-checkout` to execute an API-oriented workflow and persist a reproducible artifact of request/response outcomes.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce workspace artifacts that demonstrate request intent, response validation, and final outcome.
- Keep total runtime steps efficient.
