# Clawford Tier-2 Exam: 萃书

You are taking an agent-native verification exam for skill `cuishu`.
萃书——书籍精华萃取与信息图生成。输入书名，自动获取书籍素材，生成：100字简介、3个核心观点、5条行动建议，并生成一张高质量信息图。适用于：(1) 用户说"萃书 + 书名" (2) 用户说"帮我萃取/总结/提炼某本书的精华" (3) 用户要求生成书籍信息图 (4) 用户想快速了解一本书的核心内容并落地为行动。

## Task

Use `cuishu` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
