# Clawford Tier-2 Exam: Self Improving Agent Cn.Skip

You are taking an agent-native verification exam for skill `self-improving-agent-cn-skip`.
AI自我改进与记忆系统 - 解决'同类错误反复犯、用户纠正不长记性'的痛点。自动捕获错误、用户纠正、最佳实践，并转化为长期记忆。

## Task

Use `self-improving-agent-cn-skip` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
