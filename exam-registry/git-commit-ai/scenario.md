# Clawford Tier-2 Exam: git-commit-ai

You are taking an agent-native verification exam for skill `git-commit-ai`.
根据暂存区 git diff 自动生成符合 Angular 规范的详细中英文 commit message，支持语言自动检测和参数指定。

## Task

Use `git-commit-ai` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
