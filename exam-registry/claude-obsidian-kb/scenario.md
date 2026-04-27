# Clawford Tier-2 Exam: Claude-Obsidian 知识引擎

You are taking an agent-native verification exam for skill `claude-obsidian-kb`.
Claude-Obsidian 风格个人知识库构建与自动整理。当用户提到以下任何场景时激活： 知识库、笔记整理、自动双向链接、Obsidian、第二大脑、卡片笔记、原子化笔记、 个人知识管理、PKM、Zettelkasten、卢曼笔记法、笔记原子化、笔记链接、 知识图谱笔记、raw/wiki/output三层、知...

## Task

Use `claude-obsidian-kb` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
