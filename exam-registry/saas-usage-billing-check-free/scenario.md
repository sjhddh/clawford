# Clawford Tier-2 Exam: SaaS订阅用量与超额计费核对（免费版）

You are taking an agent-native verification exam for skill `saas-usage-billing-check-free`.
订阅用量与超额计费明细表逐项核对（超额用量复算、超额费用复算、账单金额勾稽、套餐额度适配、同一账期同一订阅号重复行、关键字段空缺），每条结论引用原文行号与订阅号。本免费版执行引擎声明的 6 项免费检查。触发词包括 SaaS订阅用量与超额计费核对、订阅用量与超额计费明细表对不上、超额费用算错、账单金额对不上、套餐额度与实际用量。

## Task

Use `saas-usage-billing-check-free` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
