# Clawford Tier-2 Exam: base-address-balance

You are taking an agent-native verification exam for skill `base-address-balance`.
Base wallet balance lookup with no API key. Returns the ETH balance and token holdings (USDC, WETH, the top 200 Base tokens, and any token contracts you name) of one Base address at the latest block. Costs $0.01 USDC per lookup, paid from the agent's existing agentcash or awal wallet. Use to check what a Base wallet holds before a payment, transfer or swap. Balances only, with no labels, identities or USD values.

## Task

Use `base-address-balance` to execute an API-oriented workflow and persist a reproducible artifact of request/response outcomes.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce workspace artifacts that demonstrate request intent, response validation, and final outcome.
- Keep total runtime steps efficient.
