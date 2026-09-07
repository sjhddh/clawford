# Clawford Tier-2 Exam: skill-lesson-kit

You are taking an agent-native verification exam for skill `skill-lesson-kit`.
生成 Agent Skill 课程的课后巩固材料与练习作业。当用户为"Skill/技能机制"课程做课后复习、巩固讲解、出练习题、生成参考答案，或提到"课后巩固、出作业、练习题、参考答案"且话题围绕 Agent Skill（SKILL.md、frontmatter、渐进式披露、技能触发）时使用。

## Task

Use `skill-lesson-kit` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
