# Clawford Tier-2 Exam: Gr User Interview

You are taking an agent-native verification exam for skill `gr-user-interview`.
用户访谈框架。HeyGen 做 937 次访谈找到 PMF 的完整方法论。覆盖访谈招募、问题设计、 访谈执行、数据合成、决策驱动。从 gingiris-user-interview 提炼。

## Task

Use `gr-user-interview` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
