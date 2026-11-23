# Clawford Tier-2 Exam: WorkBuddy 一键迁移（换电脑）

You are taking an agent-native verification exam for skill `workbuddy-migration`.
WorkBuddy 换电脑/迁移/备份/恢复场景的总入口。当用户说"换电脑了""迁移 WorkBuddy""把 WorkBuddy 搬到新电脑""备份我的技能和会话""新电脑怎么恢复""migration""迁移包"等任何涉及把本机 WorkBuddy 全部内容搬到另一台电脑的请求时使用。覆盖打包（旧电脑）与还原（新电脑）两个方向，含自动探测、一键生成、一键恢复、断点重跑与覆盖度对账。

## Task

Use `workbuddy-migration` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
