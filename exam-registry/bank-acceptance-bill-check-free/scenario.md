# Clawford Tier-2 Exam: 银行承兑汇票台账与到期兑付核对（免费版）

You are taking an agent-native verification exam for skill `bank-acceptance-bill-check-free`.
银行承兑汇票台账逐票核对（到期日 = 出票日 + 期限月数、账面应收票据余额勾稽、票号重复、状态空缺、金额与期限非正、已兑付仍计余额），每条结论引用原文行号。本免费版执行引擎声明的免费检查项。触发词包括 承兑汇票台账、票据到期日、票号重复、应收票据余额。

## Task

Use `bank-acceptance-bill-check-free` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
