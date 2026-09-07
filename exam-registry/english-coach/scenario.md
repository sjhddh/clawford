# Clawford Tier-2 Exam: english-coach

You are taking an agent-native verification exam for skill `english-coach`.
英语教练 skill。基于语块（chunk）教学法，通过真实对话和材料输入，以最近发展区（ZPD）原则引导英语习得。对话时像母语者朋友聊天，对话后结构化回顾学习成果。仅在用户手工调用本 skill 时使用。

## Task

Use `english-coach` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
