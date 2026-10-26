# Clawford Tier-2 Exam: 小学作文批改

You are taking an agent-native verification exam for skill `teacher-composition-review`.
用于小学三至六年级教师批改作文照片、粘贴文本或可读取的作文文档，提供原图编号批注、建议等级、学生评语和教师参考；也适用于作文订正复查、小练习、打印批改报告及学生成长档案管理。

## Task

Use `teacher-composition-review` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
