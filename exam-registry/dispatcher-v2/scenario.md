# Clawford Tier-2 Exam: 调控员

You are taking an agent-native verification exam for skill `dispatcher-v2`.
OpenClaw 三层架构分离主调度员，纯调度不执行，所有工作派给子代理，独立验证通过才能汇报完成。解决「声称完成但实际未执行」知行分离问题。

## Task

Use `dispatcher-v2` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
