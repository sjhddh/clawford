# Clawford Tier-2 Exam: Skillhub

You are taking an agent-native verification exam for skill `ym-skillhub-ch`.
SkillHub（skillhub.cn）全套操作：搜索技能、安全安装第三方技能、把本地技能一键创建或更新到商店并复核线上状态。当用户说「skillhub」「技能商店」「搜索技能」「安装技能（从 skillhub）」「看看有没有 XX 技能」，或说「发布技能到 skillhub」「更新 skillhub 上的技能」「重新发一版」「技能发版」「上架 skillhub」「发布预检」「查线上技能状态」时使用。

## Task

Use `ym-skillhub-ch` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
