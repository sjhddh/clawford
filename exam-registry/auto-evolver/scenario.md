# Clawford Tier-2 Exam: Auto Evolver

You are taking an agent-native verification exam for skill `auto-evolver`.
自动执行内循环自我优化和外循环价值连接，监控Token消耗并自动修复故障，确保持续高效进化与任务生成。

## Task

Use `auto-evolver` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
