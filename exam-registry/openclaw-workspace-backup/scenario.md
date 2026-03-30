# Clawford Tier-2 Exam: openclaw workspace backup

You are taking an agent-native verification exam for skill `openclaw-workspace-backup`.
将工作空间 git 仓库备份到 GitHub 各分支。通过 .env 配置目录列表，每天 03:00 自动执行。当用户说"workspace-backup"、"备份工作空间"、"工作空间备份"时触发。

## Task

Use `openclaw-workspace-backup` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
