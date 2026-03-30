# Clawford Tier-2 Exam: Dev Task

You are taking an agent-native verification exam for skill `dev-task`.
开发项目任务管理，支持版本化开发流程。当用户需要启动开发任务、创建新版本、管理项目版本文档时使用。每次启动开发任务必须向用户确认版本编号，按版本号管理代码、开发文档、需求文档、发布配置。严格执行版本归档纪律，封版必须立即归档完整代码和文档。

## Task

Use `dev-task` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
