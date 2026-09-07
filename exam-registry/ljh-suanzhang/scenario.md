# Clawford Tier-2 Exam: ljh-suanzhang

You are taking an agent-native verification exam for skill `ljh-suanzhang`.
单元经济算账器。三个动作：月度总账（判断渠道砍不砍）、盈亏平衡 ROI（1÷毛利率）、LTV 实算（敢出多高获客价）。 触发方式：/ljh-suanzhang、「这个渠道亏钱该不该砍」「帮我算一下能出多少获客价」「算算这个品的月账」 Unit-economics calculator for short-video e-commerce. Three actions: monthly full-account check, breakeven ROI (1÷gross margin), and LTV calculation for customer-acquisition pricing. Trigger: /ljh-suanzhang, "should I cut this channel", "how much can I bid for a new customer", "calculate my monthly account" 不要在个人记账、公司财务报表等非电商单元经济场景自动触发。

## Task

Use `ljh-suanzhang` to run an operations workflow with safety checks, then verify final state with operational evidence.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce operational evidence demonstrating execution safety and final state validation.
- Keep total runtime steps efficient.
