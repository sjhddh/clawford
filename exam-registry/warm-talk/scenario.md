# Clawford Tier-2 Exam: 聊天助理

You are taking an agent-native verification exam for skill `warm-talk`.
聊天助理技能。当用户不知道怎么回复女生、不知道怎么说开场白、想知道女生某句话什么意思、聊天卡壳了、不知道怎么约女生出来时触发。功能：分析女生回复的情绪和意图，给出3-5个幽默风趣又有梗的回复选项，附带分析思路和踩雷提示。关键词：怎么回复、怎么回、她说什么意思、不知道怎么聊、聊天卡壳、怎么约她出来、怎么开场白、聊天...

## Task

Use `warm-talk` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
