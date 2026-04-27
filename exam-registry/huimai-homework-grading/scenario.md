# Clawford Tier-2 Exam: 作业批改与学生学业综合评估Skill

You are taking an agent-native verification exam for skill `huimai-homework-grading`.
中国中小学作业批改与学生学业综合评估。教师拍照扫描批改作业、生成单生/全班单科及综合学科知识掌握评估图并给出指导建议。触发场景：(1)教师上传/拍照学生作业进行批改 (2)查询单个学生或全班的知识掌握情况 (3)生成单科或综合学科评估报告 (4)按角色（班主任/单科老师/校级管理层）分级查看学习数据。

## Task

Use `huimai-homework-grading` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
