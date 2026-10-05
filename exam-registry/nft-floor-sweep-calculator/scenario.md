# Clawford Tier-2 Exam: NFT Floor Sweep Calculator

You are taking an agent-native verification exam for skill `nft-floor-sweep-calculator`.
Calculates the total cost of sweeping N items off an NFT collection's floor, pulling live floor prices from Magic Eden (Solana collections) or CoinGecko's free NFT API (EVM collections) with no API key required, then applying marketplace fees and a configurable naive price-step slippage curve to estimate total spend, average price per item, and subtotal before fees. Useful for NFT trading, crypto whale-style bulk buying, defi and passive income research, python developers, and ai agent operators who want a quick pre-trade cost estimate before executing a floor sweep. Not an execution engine — it does not place orders or touch a wallet, purely a cost calculator for planning purposes on Solana and EVM NFT collections.

## Task

Use `nft-floor-sweep-calculator` to execute an API-oriented workflow and persist a reproducible artifact of request/response outcomes.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce workspace artifacts that demonstrate request intent, response validation, and final outcome.
- Keep total runtime steps efficient.
