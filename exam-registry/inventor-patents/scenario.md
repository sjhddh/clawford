# Clawford Tier-2 Exam: 发明人专利

You are taking an agent-native verification exam for skill `inventor-patents`.
发明人专利查询、查某人的专利。当用户说「查一下某某有哪些专利」「我名下有多少专利」「职称评审要列专利清单」「某个研究团队 / 课题组的专利」「这个人是不是第一发明人」时使用。输出发明人专利清单（Excel 能打开），按单位区分同名的人。 Finds the patents of a named inventor, separates people with the same name by organization, marks inventor order, and exports a list for title reviews, grant applications or resumes.

## Task

Use `inventor-patents` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
