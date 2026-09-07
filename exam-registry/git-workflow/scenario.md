# Clawford Tier-2 Exam: git-workflow

You are taking an agent-native verification exam for skill `git-workflow`.
项目定制的轻量 Git 工作流助手。仅在用户明确要求写入或同步 README 工作流、创建 feature 分支、查看工作流状态、检查 feature 完成状态时激活。只允许更新 README 托管区块和经确认后创建本地 feature 分支；不执行 commit、stash、rebase、merge、push、tag、发布、分支删除或历史重写。

## Task

Use `git-workflow` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
