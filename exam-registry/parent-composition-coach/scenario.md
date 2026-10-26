# Clawford Tier-2 Exam: 小学作文辅导（家长版）

You are taking an agent-native verification exam for skill `parent-composition-coach`.
面向小学家长批改和指导孩子作文，支持文字或手写照片输入，输出家长版建议、孩子版话术、亲子沟通方法和轻量练习。适用于家长上传孩子作文、询问如何指导修改、生成温和反馈或维护单个孩子的写作成长档案。

## Task

Use `parent-composition-coach` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
