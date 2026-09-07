# Clawford Tier-2 Exam: Mock Interview

You are taking an agent-native verification exam for skill `mock-interview`.
扮演面试官陪求职者做模拟面试练习。当用户说"帮我模拟面试""陪我练面试""模拟一下 XX 岗位的面试""给我出几道面试题练练""我想练习面试回答"，或提供了目标岗位和自己的经历希望进行问答演练时触发。本技能基于用户提供的岗位和经历做结构化追问（每轮一个问题、连续多轮），练习结束后给出复盘评分与改进建议。即使用户没...

## Task

Use `mock-interview` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
