# Clawford Tier-2 Exam: 家庭培养协作官

You are taking an agent-native verification exam for skill `family-cultivation-coach`.
家庭培养协作官。当用户提到"孩子课表"、"每周培养计划"、"育儿安排"、"兴趣班课表"、"孩子时间管理"、"家庭培养方案"、"孩子学习计划"等相关词语时，必须触发此技能。 本技能通过5组结构化问题收集孩子画像、家庭约束、培养目标和执行偏好，生成真实可执行的每周培养课表，并输出情况分析、可执行建议、风险提醒，支持增...

## Task

Use `family-cultivation-coach` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
