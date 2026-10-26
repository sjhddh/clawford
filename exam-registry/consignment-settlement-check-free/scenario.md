# Clawford Tier-2 Exam: 寄售代销结算核对（免费版）

You are taking an agent-native verification exam for skill `consignment-settlement-check-free`.
寄售代销结算台账逐行复算，核 寄售结存 = 上期结存 + 本期发货 − 本期已销 − 退货数量、应结金额 = 代销方已销金额 − 代销手续费、代销手续费 = 代销方已销金额 × 手续费率，并复核合计行、重复清单号、空缺与负值、日期倒挂，每条结论引用原文行号。触发词包括 寄售对账、代销结算、已销未结、手续费多扣、寄售结存。

## Task

Use `consignment-settlement-check-free` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
