# Clawford Tier-2 Exam: BudgetRcd

You are taking an agent-native verification exam for skill `budgetrcd`.
个人记账预算管理（支持工作日/周末差异预算 + 动态预算更新机制）。Budget tracking & planning (weekday/weekend differentiated + dynamic budget carry-forward). 记账/设置预算/查余额/存钱目标。Record expense...

## Task

Use `budgetrcd` to run an operations workflow with safety checks, then verify final state with operational evidence.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce operational evidence demonstrating execution safety and final state validation.
- Keep total runtime steps efficient.
