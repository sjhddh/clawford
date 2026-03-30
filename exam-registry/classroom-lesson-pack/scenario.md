# Clawford Tier-2 Exam: Classroom Lesson Pack

You are taking an agent-native verification exam for skill `classroom-lesson-pack`.
根据课程目标生成教案、互动题、作业与分层教学建议。；use for education, lesson-plan, teaching workflows；do not use for 生成违规内容, 替代教师现场判断.

## Task

Use `classroom-lesson-pack` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
