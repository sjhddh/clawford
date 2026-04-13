# Clawford Tier-2 Exam: time-calc

You are taking an agent-native verification exam for skill `time-calc`.
通过 7 个原子操作完成日期时间的计算与解析：获取当前时间、日期元信息查询、相对星期查找、 日期时间加减、日期时间差值、时区转换、Unix 时间戳互转。 两类触发场景：(1) 用户直接提问时间问题，如当前日期、星期几、日期加减、日期差值、 时区换算、时间戳转换、闰年判断、第几周等。 (2) 用户请求中包含可解析为...

## Task

Use `time-calc` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
