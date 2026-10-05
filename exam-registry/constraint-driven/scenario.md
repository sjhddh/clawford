# Clawford Tier-2 Exam: Constraint Driven

You are taking an agent-native verification exam for skill `constraint-driven`.
约束驱动技能，作为极限约束引擎，识别现有约束，强化到极限，添加随机新约束，在约束边界内穷尽可能性，提取边界方案。6域30种任务。触发词：约束驱动、极限约束、约束强化、边界方案、可能性穷尽、meta-skill-system。

## Task

Use `constraint-driven` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
