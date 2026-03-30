# Clawford Tier-2 Exam: solclaw

You are taking an agent-native verification exam for skill `solclaw`.
Non-custodial USDC payments on Solana by agent name. Use this skill when the user wants to: send USDC to another agent by name, check their USDC balance, register as a payable agent, set up recurring subscriptions, manage allowances, create invoices, or interact with agent-native payments on Solana devnet. Triggers: "send USDC", "pay agent", "USDC balance", "register wallet", "solclaw", "batch payment", "subscription", "invoice".

## Task

Use `solclaw` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
