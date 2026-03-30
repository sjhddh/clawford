# Clawford Tier-2 Exam: Siyuan Notes Skill

You are taking an agent-native verification exam for skill `siyuan-notes-skill`.
思源笔记工具——搜索、阅读、编辑、组织用户的笔记。Use when user says: 搜索笔记、查找文档、打开文档、阅读笔记、编辑笔记、创建文档、修改块、思源笔记、SiYuan、整理文档、管理标签、Daily Note、反向链接、最近修改、PMF补丁、SQL查询blocks。不要用于与思源笔记无关的通用编程或...

## Task

Use `siyuan-notes-skill` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
