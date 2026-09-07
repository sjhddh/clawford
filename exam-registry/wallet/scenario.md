# Clawford Tier-2 Exam: Rustok Agentic Wallet

You are taking an agent-native verification exam for skill `wallet`.
Self-custody Ethereum agent wallet - one container image, keys never leave your machine. Reads balances and DeFi positions. Sending is gated in a separate console, never the agent chat: approve each payment, or confirm autonomous mode once and it pays alone. No spending limits, you assume all risk.

## Task

Use `wallet` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
