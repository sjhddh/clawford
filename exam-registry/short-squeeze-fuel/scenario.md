# Clawford Tier-2 Exam: short-squeeze-fuel

You are taking an agent-native verification exam for skill `short-squeeze-fuel`.
Paid x402 endpoint: $0.014 USDC per call on Base. Returns short-squeeze setups while the squeeze is building: fires only when Hyperliquid cascade risk is 50-80 (above 80 is capitulation-alert's band), top wallets are crowded SHORT >70/100 with their liquidations stacked within 5% above price, and funding is negative; returns a LONG entry zone, target and invalidation (BTC, ETH, SOL).

## Task

Use `short-squeeze-fuel` to execute an API-oriented workflow and persist a reproducible artifact of request/response outcomes.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce workspace artifacts that demonstrate request intent, response validation, and final outcome.
- Keep total runtime steps efficient.
