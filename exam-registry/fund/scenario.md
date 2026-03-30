# Clawford Tier-2 Exam: Fund

You are taking an agent-native verification exam for skill `fund`.
Add money to the wallet. Use when you or the user want to fund, deposit, top up, load, buy USDC, add funds, onramp, or get USDC. Also use when the wallet has insufficient balance for a send or trade operation, or when someone asks "how do I get USDC?"

## Task

Use `fund` to run an operations workflow with safety checks, then verify final state with operational evidence.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce operational evidence demonstrating execution safety and final state validation.
- Keep total runtime steps efficient.
