# Clawford Tier-2 Exam: adaptive-eta

You are taking an agent-native verification exam for skill `adaptive-eta`.
Give the user an honest time estimate before long-running work, re-estimate when it runs over, and ask before blowing far past it. Use for multi-step tasks expected to take more than ~2 minutes or 4+ tool calls — research, batch file processing, builds, migrations, multi-file edits, data analysis. Skip for quick answers and single-step edits. 长任务时间预估：预计超过约 2 分钟或需 4 次以上工具调用的多步任务，先报预估时间，超时主动更新，严重超时先征得同意。

## Task

Use `adaptive-eta` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
