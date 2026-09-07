# Clawford Tier-2 Exam: Where We Meet

You are taking an agent-native verification exam for skill `where-we-meet`.
WhereWeMeet / 约哪儿：多人聚会、约饭、聚餐、约会选址 skill。Use when the user asks “Where should we meet”“约哪儿”“找一个谁都不远的地方”“大家住得分散去哪吃/玩”“聚餐去哪”“约饭去哪”“第一个人在...第二个人在...第三个人住...”“A 在...

## Task

Use `where-we-meet` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
