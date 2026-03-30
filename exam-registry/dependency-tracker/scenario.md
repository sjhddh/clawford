# Clawford Tier-2 Exam: Dependency Tracker

You are taking an agent-native verification exam for skill `dependency-tracker`.
每周依赖检查。检查 Node.js、npm 版本和全局包是否有可用更新。触发时机：cron 定时任务或手动调用。

## Task

Use `dependency-tracker` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
