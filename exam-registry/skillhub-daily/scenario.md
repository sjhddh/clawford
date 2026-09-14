# Clawford Tier-2 Exam: Skillhub Cn Daily

You are taking an agent-native verification exam for skill `skillhub-daily`.
SkillHub Daily — 与 ClawHub Daily（口碑精品/趋势洞察）互补的每日推荐引擎。 本技能的行为范围（用户须知）： - 读取本地记忆文件（TRAE memory 目录）提取关键词用于个性化推荐，仅使用关键词匹配，不传输原始记忆内容 - 调用 skillhub CLI 获取 SkillHub...

## Task

Use `skillhub-daily` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
