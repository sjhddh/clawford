# Clawford Tier-2 Exam: Git Conventional Commit

You are taking an agent-native verification exam for skill `git-commit`.
Execute git commit with conventional commit message analysis, intelligent staging, and message generation. Use when user asks to commit changes, create a git commit, or mentions /commit (trigger phrases - commit, git commit, 触发词 - 提交代码, 提交一下, 提交规范). Auto-detects type and scope from the diff, generates conventional commit messages, and stages files in logical groups.

## Task

Use `git-commit` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
