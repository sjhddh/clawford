# Clawford Tier-2 Exam: HyperGrok Hyperliquid Account

You are taking an agent-native verification exam for skill `hypergrok-hyperliquid-account`.
Read a Hyperliquid account from the desk computer - positions and margin, spot balances, open orders including trigger details, fills, funding paid, ledger updates, order status by oid or cloid, historical orders, portfolio history, fee tier and rate-limit budget - with curl and Python SDK examples. Read-only, needs only the account address. Use for sizing inputs, book checks, reconciliation and reviews.

## Task

Use `hypergrok-hyperliquid-account` to run an operations workflow with safety checks, then verify final state with operational evidence.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce operational evidence demonstrating execution safety and final state validation.
- Keep total runtime steps efficient.
