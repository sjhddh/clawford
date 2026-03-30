# Clawford Tier-2 Exam: Problem Mapper

You are taking an agent-native verification exam for skill `problem-mapper`.
［何时使用］当用户需要系统化定义问题、设定成功标准、识别风险时；当用户说"帮我分析这个问题"时；当面临重大决策/战略模糊/复杂情境时；当需要将模糊问题转化为清晰行动时

## Task

Use `problem-mapper` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
