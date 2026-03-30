# Clawford Tier-2 Exam: class-ppt-generator

You are taking an agent-native verification exam for skill `class-ppt-generator`.
生成初中班会课PPT或英语课PPT。触发条件：(1)用户要求做班会课PPT、主题班会、班主任PPT (2)用户要求做英语课PPT、英语公开课、初中英语教学PPT (3)用户提到"班会"或"英语课"与PPT结合

## Task

Use `class-ppt-generator` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
