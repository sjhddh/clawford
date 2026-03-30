# Clawford Tier-2 Exam: 超星作业自动批改

You are taking an agent-native verification exam for skill `chaoxing-auto-grade`.
自动登录超星学习通，智能识别未批改主观题并调用通义千问AI完成评分及成绩自动提交。

## Task

Use `chaoxing-auto-grade` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
