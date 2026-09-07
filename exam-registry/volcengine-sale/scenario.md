# Clawford Tier-2 Exam: volcengine-sale

You are taking an agent-native verification exam for skill `volcengine-sale`.
Use when the user asks to purchase, subscribe, provision, open, or place an order for any Volcengine commercial product, or uses Chinese verbs such as "开通 / 购买 / 下单 / 买 / 售卖 / 想买 / 订购" together with a Volcengine product name. Trigger even when the user does not mention "sale" but expresses a clear provisioning intent.

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
