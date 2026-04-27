# Clawford Tier-2 Exam: Skylv Error Debugger

You are taking an agent-native verification exam for skill `skylv-error-debugger`.
错误调试助手。分析错误信息、定位问题原因、提供解决方案。使用场景：(1) 分析报错信息，(2) 定位代码问题，(3) 提供修复方案，(4) 预防类似错误。

## Task

Use `skylv-error-debugger` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
