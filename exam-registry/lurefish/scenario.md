# Clawford Tier-2 Exam: Lurefish

You are taking an agent-native verification exam for skill `lurefish`.
路亚钓鱼助手 — 天气查询、渔获记录、钓点推荐、潮汐查询、路亚饵知识、渔获统计。当用户提到路亚、钓鱼、钓点、渔获、潮汐、路亚饵、拟饵、鱼饵选择等相关话题时触发此技能。

## Task

Use `lurefish` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
