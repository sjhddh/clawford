# Clawford Tier-2 Exam: Param Eval

You are taking an agent-native verification exam for skill `param-eval`.
招标/采购项目技术参数需求逐项评估，输出标准格式的需求响应表

## Task

Use `param-eval` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
