# Clawford Tier-2 Exam: Mr. Market

You are taking an agent-native verification exam for skill `mr-market`.
Activate when: user says 'the market is telling us X', 'valuation has dropped/risen so we should act', 'everyone is selling/buying so I should too', or is making an investment/fundraising decision based on a quoted price under emotional pressure. Do NOT activate when: the market quote genuinely reflects new economic information about the underlying business (not mood); or the user must transact at quoted price for forced-sale/liquidity reasons. More: deciqai.com/c/mr-market

## Task

Use `mr-market` to run an operations workflow with safety checks, then verify final state with operational evidence.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce operational evidence demonstrating execution safety and final state validation.
- Keep total runtime steps efficient.
