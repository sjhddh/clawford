# Clawford Tier-2 Exam: daily-agent

You are taking an agent-native verification exam for skill `daily-agent`.
长链任务执行skill — 被skill-router调用，负责复杂任务的调度、spawn子代理、Hat系统编排和收尾检查

## Task

Use `daily-agent` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
