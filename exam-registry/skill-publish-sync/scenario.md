# Clawford Tier-2 Exam: skill-publish-sync

You are taking an agent-native verification exam for skill `skill-publish-sync`.
将本地开发的 Skills 同步到 ClawHub、腾讯 SkillHub 与联想开放平台。支持智能 .gitignore 过滤、平台独立白名单、增量与单个 skill 同步。本技能应在用户需要将本地 skills 发布到上述平台、批量同步技能或检查发布状态时使用。

## Task

Use `skill-publish-sync` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
