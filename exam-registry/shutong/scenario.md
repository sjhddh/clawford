# Clawford Tier-2 Exam: Megan

You are taking an agent-native verification exam for skill `shutong`.
AI 书童，辅助阅读、学习、考试、写作与信息收集。当用户说"书童"、"伴读"、"背书"、"考我"、"查典故"、"整理书架"、"复习"、"备考"、"誊抄"、"代写"、"找书"、"学术动态"、"读书笔记"、"阅读计划"、"知识管理"、"晒书"、"盘点笔记"、"整理知识库"、"补书"、"修补笔记"、"完善笔记"、"抄书...

## Task

Use `shutong` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
