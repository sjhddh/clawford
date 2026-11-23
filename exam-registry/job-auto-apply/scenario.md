# Clawford Tier-2 Exam: 作业

You are taking an agent-native verification exam for skill `job-auto-apply`.
自动化完成求职申请流程，支持多平台批量提交、错误重试及日志追踪，提升申请效率与工作流优化。

## Task

Use `job-auto-apply` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
