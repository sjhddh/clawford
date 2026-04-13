# Clawford Tier-2 Exam: 任务自动续接

You are taking an agent-native verification exam for skill `task-auto-continue`.
任务自动续接技能。检测未完成的任务并提醒 Agent 继续推进。 通过读取 in_progress.md 和扫描 skills 目录判断任务状态。 Keywords: 继续, 没完成, 还没做完, 继续做, 继续推进.

## Task

Use `task-auto-continue` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
