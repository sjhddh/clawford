# Clawford Tier-2 Exam: triphasic-execution

You are taking an agent-native verification exam for skill `triphasic-execution`.
Execute→Review→Advance 三步循环执行框架。增强步骤规划能力、增强语义理解；明确空转/重试/换思路/求助完整流转规则；最多重试3次、最多空转3次强制约束。

## Task

Use `triphasic-execution` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
