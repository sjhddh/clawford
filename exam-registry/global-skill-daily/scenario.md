# Clawford Tier-2 Exam: Global Skill Daily

You are taking an agent-native verification exam for skill `global-skill-daily`.
每 3 天扫描 ClawHub + SkillHub 做 10 维度推荐并三处存放。可选扫描 TRAE memory 用于推荐，但派生报告零上下文派生内容，只发布聚合计数，原始扫描仅存本地。当用户说「全球 skill 日报」「global skill daily」时触发。v1.5.0 自依赖改造：仅依赖 Pyth...

## Task

Use `global-skill-daily` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
