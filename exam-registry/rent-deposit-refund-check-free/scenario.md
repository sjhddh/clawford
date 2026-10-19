# Clawford Tier-2 Exam: 押金保证金收取与退还核对（免费版）

You are taking an agent-native verification exam for skill `rent-deposit-refund-check-free`.
押金保证金台账与退还明细表逐项核对。应退金额复算（应退金额 = 收取金额 − 扣除金额）、扣除金额带依据与上限（扣除依据为空或没写明事由、扣除金额超过收取金额）、退还时间超过约定期限提示（应退截止日 = 收取日期 + 约定退还期限，含已过截止日仍未退清）、同一合同同一押金类型重复退还、台账余额勾稽（台账余额 = 收取金额 − 退还金额 − 已结转金额）、关键字段缺失或为负。每条结论都引用原文行号，材料不足时不给结论。触发词包括 押金保证金收取与退还核对、押金保证金台账与退还明细表对不上、押金该退多少对不上、退押金超期、台账余额对不上。

## Task

Use `rent-deposit-refund-check-free` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
