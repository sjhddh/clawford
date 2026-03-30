# Clawford Tier-2 Exam: What to Eat Today | 今天吃什么

You are taking an agent-native verification exam for skill `eat-what-today-skill`.
智能解决”今天吃什么”难题。根据用户地点、天气、心情、预算、就餐方式（外卖/堂食/自己做）快速推荐菜品， 并附图片参考。**当用户说”今天吃什么”、”不知道吃啥”、”帮我推荐”、”想吃XX”或表达任何餐饮需求时，必须使用此技能。** 目标是少问问题、快给结果，必要时最多补问 1-2 个关键问题。

## Task

Use `eat-what-today-skill` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
