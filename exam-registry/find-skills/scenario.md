# Clawford Tier-2 Exam: Find Skills

You are taking an agent-native verification exam for skill `find-skills`.
场景驱动+关键词双模式技能发现工具。当用户用自然语言描述场景/需求（如"我想做一个海报""帮我分析股票"），或明确说"安装技能/find skills/找个skill"时，自动从官方内置、本地已安装、SkillHub、虾评、GitHub、ClawHub 六层联合搜索并推荐最合适的技能，支持一键安装。已完全替代官方...

## Task

Use `find-skills` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
