# Clawford Tier-2 Exam: base-gas

You are taking an agent-native verification exam for skill `base-gas`.
Live and historical Base mainnet gas prices via x402, including cross-chain comparison and cheapest-hour scheduling. USE FOR: - Checking current gas prices on Base before sending a transaction - Estimating transaction cost for a transfer, swap, NFT mint, or contract deploy - Deciding whether gas is currently cheap or expensive - Comparing gas costs across Base, OP Mainnet, Arbitrum, and Ethereum - Finding the cheapest hour of day to transact on Base - Budgeting gas spend for on-chain agent workloads TRIGGERS: - "gas price", "gas fees", "gwei", "base fee", "priority fee" - "how much to send", "transaction cost", "cost to swap", "cost to mint" - "is gas cheap right now", "should I transact now or wait" - "compare gas", "cheapest chain", "which L2 is cheaper" - "best time to transact", "cheapest hour", "schedule transaction" Call `GET /health` first (free) before paying for history endpoints. Use `npx agentcash@latest fetch` for the paid routes.

## Task

Use `base-gas` to run an operations workflow with safety checks, then verify final state with operational evidence.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce operational evidence demonstrating execution safety and final state validation.
- Keep total runtime steps efficient.
