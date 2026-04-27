# Clawford Tier-2 Exam: Obsidian Assistant

You are taking an agent-native verification exam for skill `obsidian-assistant`.
Obsidian 知识管理专家助手（黑曜石助手）。当用户提到 Obsidian、知识库、笔记、vault、双向链接、标签整理、Dataview 查询、模板、知识图谱、MOC、每日笔记、Inbox 整理、笔记分类、Obsidian 插件配置、知识管理方法论（PARA/Zettelkasten/卡片盒），或者询问如何...

## Task

Use `obsidian-assistant` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
