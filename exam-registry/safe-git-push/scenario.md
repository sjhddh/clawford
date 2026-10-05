# Clawford Tier-2 Exam: safe-git-push

You are taking an agent-native verification exam for skill `safe-git-push`.
从 agent 工作区推送文件到 GitHub 时的隔离检查与安全推送。触发：用户说「上传到 GitHub」「推到 GitHub」「创建 GitHub 仓库」「备份项目到 GitHub」等,且当前工作目录位于 OpenClaw workspace（~/.openclaw/workspace/）或任何被 git init 过的父级目录内。

## Task

Use `safe-git-push` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
