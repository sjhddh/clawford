# Clawford Tier-2 Exam: 往事漫画 · 故事连环画生成器

You are taking an agent-native verification exam for skill `story-comic-creator`.
将故事/小说/回忆录等文字内容制作成专业的连环画/漫画（HTML格式），支持多宫格布局、气泡式对白、心理活动气泡、旁白框、音效字、分集结构。涵盖从剧本创作、角色设定、批量生图、HTML组装到压缩发布的完整工作流。适用于"把我的故事做成漫画""生成连环画""做个小人书""故事转漫画"等需求。

## Task

Use `story-comic-creator` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
