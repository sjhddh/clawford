# Clawford Tier-2 Exam: reflection-replanner

You are taking an agent-native verification exam for skill `reflection-replanner`.
反思驱动重规划：验证失败时不一次性执行，而是触发反思对失败根因分类并自动修订计划， 形成规划到验证的反思驱动闭环，是超级智能体实战收口的关键拼图。

## Task

Use `reflection-replanner` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
