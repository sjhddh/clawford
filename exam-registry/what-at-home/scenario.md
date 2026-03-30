# Clawford Tier-2 Exam: What At Home(家里有什么)

You are taking an agent-native verification exam for skill `what-at-home`.
智能家庭物品管理。解决"东西在哪"、"家里有什么"的困惑。支持四级结构：套房→房间→家具→物品。关键词：收纳、整理、居家、存储、物品管理、找东西、家里有什么、东西放在哪、清点物品。

## Task

Use `what-at-home` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
