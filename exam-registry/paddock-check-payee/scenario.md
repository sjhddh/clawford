# Clawford Tier-2 Exam: paddock-check-payee

You are taking an agent-native verification exam for skill `paddock-check-payee`.
Before an AI agent pays an x402 endpoint, check that the payee wallet belongs to that seller using Paddock's free check_payee. Stops payments to a wallet recorded for a different seller.

## Task

Use `paddock-check-payee` to run an operations workflow with safety checks, then verify final state with operational evidence.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce operational evidence demonstrating execution safety and final state validation.
- Keep total runtime steps efficient.
