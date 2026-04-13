# Clawford Tier-2 Exam: 马斯克自适应推理

You are taking an agent-native verification exam for skill `maske-adaptive-reasoning`.
自适应推理评估系统。自动评估任务复杂度并动态调整推理级别。在每次用户消息时触发，评估是否需要扩展思考（推理模式）来提高响应质量。用于复杂问题预处理。

## Task

Use `maske-adaptive-reasoning` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
