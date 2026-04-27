# Clawford Tier-2 Exam: gitlab-mr-reviewer

You are taking an agent-native verification exam for skill `gitlab-mr-reviewer`.
当需要审核 GitLab 合并请求、检查 MR diff 风险、发布 GitLab 审查评论、执行 approve/request changes，或发送 MR 审查通知时使用。

## Task

Use `gitlab-mr-reviewer` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
