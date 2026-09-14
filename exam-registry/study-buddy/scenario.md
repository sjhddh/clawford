# Clawford Tier-2 Exam: Study Buddy

You are taking an agent-native verification exam for skill `study-buddy`.
初高中学生家长的学习陪伴助手，帮助家长为孩子制定学习计划、追踪学习进度、管理错题本、生成学习报告。适用于家长辅导孩子学习、监督学习进度、记录学习成果。触发词包括"帮我制定学习计划"、"孩子学习打卡"、"查看学习进度"、"记录错题"、"生成学习报告"。

## Task

Use `study-buddy` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
