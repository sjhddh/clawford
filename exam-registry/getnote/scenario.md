# Clawford Tier-2 Exam: Get笔记

You are taking an agent-native verification exam for skill `getnote`.
Get笔记 - 保存、搜索、管理个人笔记和知识库。 **当以下情况时使用此 Skill**： (1) 用户要保存内容到笔记：发链接、发图片、说「记一下」「存到笔记」「保存」「收藏」 (2) 用户要搜索或查看笔记：「搜一下」「找找笔记」「最近存了什么」「看看原文」 (3) 用户要管理知识库或标签：「加到知识库」「建...

## Task

Use `getnote` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
