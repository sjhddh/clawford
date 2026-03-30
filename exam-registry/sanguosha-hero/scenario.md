# Clawford Tier-2 Exam: sanguosha-hero

You are taking an agent-native verification exam for skill `sanguosha-hero`.
三国杀标准版武将技能查询。当用户询问三国杀武将的技能时使用此技能。触发关键词包括：三国杀、武将技能、查武将、技能查询，以及直接提到武将名（如"赵云"、"诸葛亮"、"张飞"等）并询问其技能、能力、效果的场景。支持自然语言提问，如"赵云有什么技能"、"查一下诸葛亮的技能"、"三国杀 张飞 技能"等。

## Task

Use `sanguosha-hero` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
