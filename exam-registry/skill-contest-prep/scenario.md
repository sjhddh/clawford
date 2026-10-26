# Clawford Tier-2 Exam: 技能大赛全流程备赛助手

You are taking an agent-native verification exam for skill `skill-contest-prep`.
面向职业院校技能大赛的全流程备赛AI助手。覆盖赛前项目方向生成、PPT大纲策划、 展示剧本编排、训练计划制定四大模块。当用户提到技能大赛、备赛、参赛准备、 训练计划、PPT答辩、展示剧本、竞赛指导、选拔选手等关键词时触发。 适用于人工智能应用、数字艺术设计、软件开发、工业互联网、智能制造、 电商运营等各类赛项，以及双创竞赛、挑战杯等综合类赛事。

## Task

Use `skill-contest-prep` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
