# Clawford Tier-2 Exam: Academic Thesis Workflow

You are taking an agent-native verification exam for skill `academic-thesis-workflow`.
此技能提供一个标准化、可复现的学术论文生成工作流，通过四个有序步骤将论文主题转化为完整学术论文：主题可行性评估、主题转论证骨架加衍生方向、选定方向优化骨架、骨架转完整论文加自动复核。支持一切学科领域（人文社科与理工科），当用户想要撰写博士论文、硕士论文、期刊论文，或需要从主题出发系统化构建学术论文论证结构时，应使...

## Task

Use `academic-thesis-workflow` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
