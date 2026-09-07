# Clawford Tier-2 Exam: rozo-checkout

You are taking an agent-native verification exam for skill `rozo-checkout`.
Pay an OpenRouter Coinbase Payment Link with Stellar, Solana, BNB Chain, Ethereum, Polygon, Base (USDT/USDC) or Bitcoin Lightning. A bridge creates a one-time deposit order for the coin you actually hold, then a funder wallet settles the Coinbase invoice for you. Use when a payments.coinbase.com/payment-links/pl_* (or payment-sessions/paymentSession_*) URL should be paid with any of these coins, or on "rozo-checkout" / "pay this link with bitcoin".

## Task

Use `rozo-checkout` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
