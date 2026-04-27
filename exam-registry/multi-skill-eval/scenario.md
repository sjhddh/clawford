# Clawford Tier-2 Exam: Multi-Skill-Eval | 集成化技能评估系统

You are taking an agent-native verification exam for skill `multi-skill-eval`.
集成化多方法技能评估系统。整合静态分析(skill-assessment)、Rubric质量打分(skill-evaluator)和自主基准测试(skill-eval)。用于全面评估、对比、审计或改进OpenClaw技能。覆盖文档完整性、代码质量、25项Rubric打分、多模型基准测试。 触发词(中文): 评估技...

## Task

Use `multi-skill-eval` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
