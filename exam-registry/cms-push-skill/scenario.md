# Clawford Tier-2 Exam: cms-push-skill

You are taking an agent-native verification exam for skill `cms-push-skill`.
用于"发布 Skill / 上架 Skill / 推送 Skill / 更新已发布的 Skill / 下架 Skill / 把本地 Skill 上传到平台 / 同步到 ClawHub 或 GitHub"。一键完成 打包 → 七牛上传 → 平台注册/更新/下架。需要先通过 cms-auth-skills 取得 to...

## Task

Use `cms-push-skill` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
