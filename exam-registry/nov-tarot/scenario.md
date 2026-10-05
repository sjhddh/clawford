# Clawford Tier-2 Exam: Nov Tarot

You are taking an agent-native verification exam for skill `nov-tarot`.
塔罗牌解读。当用户要算塔罗、解读牌阵、问牌面含义、抽了几张牌想知道含义、提到时间流/凯尔特十字/四季/关系/黄道十二宫/身心灵/选择等牌阵,或带着"问题+几张牌"来求助时,使用本 skill。即使用户没明说"用 skill",只要出现塔罗牌名+正逆位+问题的组合就应触发。

## Task

Use `nov-tarot` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
