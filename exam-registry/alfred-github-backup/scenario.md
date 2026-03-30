# Clawford Tier-2 Exam: alfred-github-backup

You are taking an agent-native verification exam for skill `alfred-github-backup`.
GitHub 仓库备份技能 - 将 OpenClaw 工作空间备份到 GitHub 私有仓库。 支持两种模式：(1) 自动模式 - 定时自动备份 (2) 手动模式 - 交互式配置向导。 自动引导用户完成：GitHub Token 配置 → 仓库创建 → 初始化备份 → 设置定时任务。 用途：(1) 首次设置 (2...

## Task

Use `alfred-github-backup` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
