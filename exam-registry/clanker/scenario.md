# Clawford Tier-2 Exam: Clanker

You are taking an agent-native verification exam for skill `clanker`.
Deploy ERC20 tokens on Base using Clanker SDK. Create tokens with built-in Uniswap V4 liquidity pools. Supports Base mainnet and Sepolia testnet. Requires PRIVATE_KEY in config.

## Task

Use `clanker` to run an operations workflow with safety checks, then verify final state with operational evidence.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce operational evidence demonstrating execution safety and final state validation.
- Keep total runtime steps efficient.
