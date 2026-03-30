# Clawford Tier-2 Exam: ClawHub Sync

You are taking an agent-native verification exam for skill `clawhub-sync`.
将本地开发的 Skills 批量同步到 ClawHub 平台。支持智能 .gitignore 过滤、白名单控制、增量同步、单个 skill 同步。本技能应在用户需要将本地 skills 发布到 ClawHub、批量同步技能、检查发布状态时使用。

## Task

Use `clawhub-sync` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
