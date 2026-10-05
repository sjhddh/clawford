# Clawford Tier-2 Exam: 薪酬社保与人力专家

You are taking an agent-native verification exam for skill `expert-payroll-pub`.
薪酬社保与人力专家，一个技能覆盖这一类 21 个子技能——销售提成核对、建筑工人工资专户发放核对、残疾人就业保障金申报核对、住房公积金汇缴与基数核对、人力资源月度自查包、人力法定费用技能包…。贴一张表进来，自动分诊到对应的子技能并给出逐条结论（带原文行号、可复算），材料不足时如实说"缺哪些列"，绝不给结论。触发词包括 薪酬社保与人力专家、销售提成核对、建筑工人工资专户发放核对、残疾人就业保障金申报核对、住房公积金汇缴与基数核对、人力资源月度自查包、人力法定费用技能包。

## Task

Use `expert-payroll-pub` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
