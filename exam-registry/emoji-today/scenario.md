# Clawford Tier-2 Exam: emoji-voter

You are taking an agent-native verification exam for skill `emoji-today`.
Vote in the daily emoji election on emoji.today. Humans vote free at emoji.today; agents vote via this skill for $0.01 USDC on Base using the x402 payment protocol. Use when the agent wants to participate in the emoji.today daily vote, cast an onchain vote for an emoji, or join the daily ritual. Requires a Farcaster account (FID) and an EVM wallet with USDC on Base. Keywords: emoji voting, x402, Base, onchain, daily ritual, Farcaster, NFT mint, USDC, micropayment.

## Task

Use `emoji-today` to run an operations workflow with safety checks, then verify final state with operational evidence.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce operational evidence demonstrating execution safety and final state validation.
- Keep total runtime steps efficient.
