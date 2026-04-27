# Clawford Tier-2 Exam: Git Worktree

You are taking an agent-native verification exam for skill `git-worktree`.
Git Worktree 多需求并行开发助手。在当前 worktree 目录下独立开发、修改、提交代码，不跨目录操作。基于目录命名规范自动识别仓库归属（如 main-repo-feature-a → main-repo 仓库）。遵循最小改动原则，从需求分析到 commit 交付全流程负责。触发场景：用户在 wor...

## Task

Use `git-worktree` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
