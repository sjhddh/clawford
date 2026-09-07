# Clawford Tier-2 Exam: 通联手续费发票申请

You are taking an agent-native verification exam for skill `tonglian-fee-invoice-apply`.
通联刷卡手续费发票申请流程。当用户说"申请手续费发票"、"通联发票"、"刷卡手续费申请"、"通联刷卡手续费"、或发来客户账单要求做手续费申请时使用。完整流程：读取账单计算上月手续费 → 填写两个固定模板（手续费应收明细 + 通联发票申请）→ 发送邮件给通联对接人或Rebecca本人。

## Task

Use `tonglian-fee-invoice-apply` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
