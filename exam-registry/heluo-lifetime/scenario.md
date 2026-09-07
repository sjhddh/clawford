# Clawford Tier-2 Exam: 河洛理数 · 一卦定终身

You are taking an agent-native verification exam for skill `heluo-lifetime`.
河洛理数 · 一卦定终身。根据出生年月日时，推算本命卦、后天卦、大运、流年，逐岁批断运势。 触发场景：(1) 用户提供八字或出生日期要求算河洛命卦 (2) 用户问"一卦定终身""河洛理数""本命卦怎么算" (3) 用户要求排大运/流年/岁运断语。 加载后第一件事：主动追问八字、出生时间、出生地点、性别四项信息，缺什么问什么，直到齐全才进入计算。 关键词：河洛理数、本命卦、元堂、大运流年、岁运逢之、陈抟、邵雍、一卦定终身。

## Task

Use `heluo-lifetime` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
