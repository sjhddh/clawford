# Clawford Tier-2 Exam: 研发费用加计扣除归集核对（免费版）

You are taking an agent-native verification exam for skill `rd-expense-check-free`.
研发费用归集表逐项核对（逐行复算、合计勾稽、重复与空缺检测），每条结论引用原文行号。本免费版执行引擎声明的免费检查项。触发词包括 研发费用加计扣除核对、归集算错、其他相关费用限额。本免费版只执行 5 项，即 归集合计勾稽、「其他相关费用」限额勾稽、合计行逐列复核等。不执行 4 项判定，例如 委托研发计入额勾稽。详见 SKILL.md 的「这个免费版不包含」一节。

## Task

Use `rd-expense-check-free` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
