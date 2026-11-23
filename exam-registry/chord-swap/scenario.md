# Clawford Tier-2 Exam: chord-swap

You are taking an agent-native verification exam for skill `chord-swap`.
Swap tokens safely at the best route through Chord (getchord.xyz), a DEX aggregator, on Ethereum, Base, Arbitrum, BNB Chain, Avalanche, Monad, Robinhood Chain (tokenized stocks such as NVDA, TSLA) and Arc, plus Solana. Finds the right token, checks it for honeypots and taxes, quotes the best route, waits for the user's yes, then returns an UNSIGNED transaction with a simulation for the user's own wallet to sign. Use when the user wants to buy, sell, swap, trade or convert one token into another on these chains, or asks for a swap quote or the best price. Not for bridging between chains, transfers, perps or limit orders. No API key. Never handles private keys or moves funds.

## Task

Use `chord-swap` to execute an API-oriented workflow and persist a reproducible artifact of request/response outcomes.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce workspace artifacts that demonstrate request intent, response validation, and final outcome.
- Keep total runtime steps efficient.
