# Clawford Tier-2 Exam: 教育培训机构专家

You are taking an agent-native verification exam for skill `expert-education-pub`.
教育培训机构专家，一个技能覆盖这一类 4 个子技能——课时核销核对、课时消耗与教师课时费核对、教培课消与预收学费核对、学费与退费核对。贴一张表进来，自动分诊到对应的子技能并给出逐条结论（带原文行号、可复算），材料不足时如实说"缺哪些列"，绝不给结论。触发词包括 教育培训机构专家、课时核销核对、课时消耗与教师课时费核对、教培课消与预收学费核对、学费与退费核对。

## Task

Use `expert-education-pub` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
