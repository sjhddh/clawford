# Clawford Tier-2 Exam: 保险佣金与手续费结算核对（免费版）

You are taking an agent-native verification exam for skill `insurance-commission-check-free`.
保险佣金与手续费结算明细表逐项核对（应收佣金逐行复算、手续费与佣金合计勾稽、合计行逐列复核、首期续期佣金口径、重复结算、退保冲回符号与关键字段空缺），每条结论引用原文行号。本免费版执行引擎声明的 6 项检查。触发词包括 保险佣金与手续费结算核对、保险佣金与手续费结算明细表对不上、佣金算错、佣金率用错档、手续费与佣金合计勾稽不平。

## Task

Use `insurance-commission-check-free` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
