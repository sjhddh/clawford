# Clawford Tier-2 Exam: git-commit-skill

You are taking an agent-native verification exam for skill `git-commit-skill`.
自动分析当前分支改动，智能推断 Gitmoji，分阶段确认改动点、安全检查及 commit message 后辅助提交代码。

## Task

Use `git-commit-skill` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
