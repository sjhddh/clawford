# Clawford Tier-2 Exam: Function Calling

You are taking an agent-native verification exam for skill `skylv-function-calling`.
Function Calling助手。设计Agent调用外部函数、工具。使用场景：(1) Function Schema设计，(2) 参数校验逻辑，(3) 返回结果处理，(4) 错误重试机制。

## Task

Use `skylv-function-calling` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
