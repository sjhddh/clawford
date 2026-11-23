# Clawford Tier-2 Exam: 作业跟进管家

You are taking an agent-native verification exam for skill `xiaozhi-teach-homework-tracker`.
帮独立教师跟进课上练习与学员带来的学校作业、考试错题：登记、追状态、归错因、导出下节课讲什么。适用于老师说"登记今天课上的练习""[化名] 课上那份练习做完了吗""[化名] 带来了学校作业，帮我归一下错因""考试错题帮我归类""错题回流""下节课该讲什么""这道题他错第三次了""看下 [化名] 的作业画像"。流程：老师口述课上练习或学校作业 → 追七档状态 → 按 shared/vocab.md §1/§3 归错因 → 阈值命中先存证据待老师确认。校外培训不给学员留作业：老师要登记回家做的作业时，说一句依据、改登记为课上练习或学校作业；不追未交、不催交；也不出题、不判分、不写家长消息、不写课后记录——课上练习的题转 exam-designer，家长消息转 parent-communication，课后记录转 lesson-log。

## Task

Use `xiaozhi-teach-homework-tracker` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
