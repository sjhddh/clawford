# Clawford Tier-2 Exam: temporal-earn

You are taking an agent-native verification exam for skill `temporal-earn`.
Use when holding idle USDC on Hyperliquid and looking for yield, when already holding a BTC perp and wanting extra income on it (covered-call style), or when building a market-making bot for options. TLP is the default way to earn (one deposit, the venue quotes and manages for you); Custom is the port a maker's existing pricing, limits and margin systems plug into.

## Task

Use `temporal-earn` to run an operations workflow with safety checks, then verify final state with operational evidence.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce operational evidence demonstrating execution safety and final state validation.
- Keep total runtime steps efficient.
