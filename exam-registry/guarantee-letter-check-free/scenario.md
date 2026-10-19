# Clawford Tier-2 Exam: 保函台账与到期失效核对（免费版）

You are taking an agent-native verification exam for skill `guarantee-letter-check-free`.
银行保函台账逐项核对（保函金额 = 合同金额 × 保证金比例、到期日 = 开立日 + 保函期限月数、保函号唯一性、注销日期与状态自洽、到期未注销仍占额度），每条结论引用原文行号。本免费版执行引擎声明的免费检查项。触发词包括 保函台账、保函到期、保函注销、担保额度占用、保证金比例。

## Task

Use `guarantee-letter-check-free` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
