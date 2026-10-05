# Clawford Tier-2 Exam: Swarm Coder Free

You are taking an agent-native verification exam for skill `swarm-coder-free`.
AI Agent子代理分派开发系统，每任务新代理+两阶段review，高质量快速迭代。

## Task

Use `swarm-coder-free` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
