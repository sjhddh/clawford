# Clawford Tier-2 Exam: 工资表发放前核对（免费版）

You are taking an agent-native verification exam for skill `payroll-check-free`.
发薪前把工资表算一遍，核对每个人的实发工资是否等于应发减各项扣款、合计行是否等于各列之和、有没有同一人出现两行、有没有金额空缺与占位符。每条结论都带行号与原文，不需要付款，也不需要注册。本免费版执行 逐人实发算术、合计行复核、重复人员检测、空白与占位符。触发词包括 工资表核对、发薪前检查、实发工资算错、工资合计不对、重复发薪、算薪、薪酬核对、HR 对账。

## Task

Use `payroll-check-free` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
