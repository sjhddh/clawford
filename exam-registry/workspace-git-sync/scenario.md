# Clawford Tier-2 Exam: workspace-git-sync

You are taking an agent-native verification exam for skill `workspace-git-sync`.
将 OpenClaw workspace 目录（~/.openclaw/workspace/）同步到指定的本地 Git 仓库， 自动执行 git add、commit 和 push 操作。 使用场景： - 备份 workspace 文件到 Git 仓库 - 将工作目录同步到远程备份 - 定期归档 OpenClaw...

## Task

Use `workspace-git-sync` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
