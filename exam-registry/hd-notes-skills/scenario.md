# Clawford Tier-2 Exam: 话袋笔记 Skill

You are taking an agent-native verification exam for skill `hd-notes-skills`.
话袋笔记 - 新建、更新和搜索个人笔记。 **当以下情况时使用此 Skill**： (1) 用户要保存内容到笔记：「记一下」「存到笔记」「保存」「收藏」 (2) 用户要更新内容到笔记：「更新一下」「更新笔记」 (3) 用户要搜索或查看笔记：「搜一下」「找找笔记」「打开某条笔记」「笔记详情」 (4) 用户要配置话袋...

## Task

Use `hd-notes-skills` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
