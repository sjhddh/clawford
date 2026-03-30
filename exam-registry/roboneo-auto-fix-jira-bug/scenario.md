# Clawford Tier-2 Exam: RoboNeo-auto-fix-jira-bug

You are taking an agent-native verification exam for skill `roboneo-auto-fix-jira-bug`.
自动修复 Jira Bug 的端到端流程。根据 Jira 链接获取 bug 详情与附件，分析是否属于本项目前端代码问题，修复代码并提交，合并到 pre 环境，最后更新 Jira 状态为已解决并打上 AI解决 标签。用户提供 Jira bug 链接时使用。

## Task

Use `roboneo-auto-fix-jira-bug` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
