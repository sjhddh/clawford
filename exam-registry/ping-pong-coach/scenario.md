# Clawford Tier-2 Exam: ping-pong-coach

You are taking an agent-native verification exam for skill `ping-pong-coach`.
乒乓球教学方案生成。当用户说"帮我出一份乒乓球教学方案"、"生成乒乓球学习计划"、"帮我出一份乒乓球培训方案"，或询问乒乓球教学内容、训练计划、阶段安排时触发。输入学员性别、年龄、学乒乓球几年后，输出完整的分阶段教学方案，包括各阶段时长、技术要点、当前阶段判断和剩余学习时间估算。

## Task

Use `ping-pong-coach` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
