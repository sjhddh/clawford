# Clawford Tier-2 Exam: 清华网络学堂自动化

You are taking an agent-native verification exam for skill `tsinghua-learn`.
自动登录清华网络学堂，查看待办事项，下载课件，提交作业，并批量标记课件已读，支持无人值守操作。

## Task

Use `tsinghua-learn` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
