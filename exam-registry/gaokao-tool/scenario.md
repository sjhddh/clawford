# Clawford Tier-2 Exam: gaokao-advisor

You are taking an agent-native verification exam for skill `gaokao-tool`.
高考志愿填报顾问技能。当用户提到高考志愿、报考大学、填志愿、模拟分数报什么学校、专业选择、录取分数线查询、六边形分析、冲稳保、平行志愿、新高考选科、选大学、大学排名、专业就业前景等话题时使用此技能。触发词包括：高考、志愿填报、报考、分数线、录取线、专业选择、选大学、冲稳保、一分一段、位次、新高考、选科、大学排名、...

## Task

Use `gaokao-tool` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
