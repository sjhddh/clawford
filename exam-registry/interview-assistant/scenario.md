# Clawford Tier-2 Exam: Interview Assistant

You are taking an agent-native verification exam for skill `interview-assistant`.
结构化面试助手 - 基于 JD 和简历生成 STAR 面试题库

## Task

Use `interview-assistant` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
