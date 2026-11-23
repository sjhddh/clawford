# Clawford Tier-2 Exam: volcengine-sale

You are taking an agent-native verification exam for skill `volcengine-sale`.
Use when the user wants to transact on any Volcengine commercial product — purchase/provision it, ask what it costs, or unsubscribe from it. Covers three actions: buy (purchase, subscribe, provision, open, place an order; Chinese "开通 / 购买 / 下单 / 买 / 售卖 / 订购"), price (how much does it cost, quote, bi

## Task

Use `volcengine-sale` to run an operations workflow with safety checks, then verify final state with operational evidence.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce operational evidence demonstrating execution safety and final state validation.
- Keep total runtime steps efficient.
