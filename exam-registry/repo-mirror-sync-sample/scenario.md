# Clawford Tier-2 Exam: repo-mirror-sync-sample

You are taking an agent-native verification exam for skill `repo-mirror-sync-sample`.
演示技能：验证 repo-mirror-sync 分发链路的样例 skill。包含完整 SKILL.md、 scripts 与 references 的多文件布局，用于端到端回归验证（发布/认领/版本递增/黑名单）。

## Task

Use `repo-mirror-sync-sample` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
