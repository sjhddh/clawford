# Clawford Tier-2 Exam: Novel Assistant

You are taking an agent-native verification exam for skill `novel-assistant`.
小说创作助手，维护小说连贯性和一致性。核心功能：(1) 创建/续写小说章节 (2) 管理人物设定和世界观 (3) 追踪伏笔和时间线 (4) 压缩记忆文件控制上下文 (5) 本地章节备份 (6) 多作品并行管理 (7) 人物对话风格样本库。触发词：小说、章节、续写、人物设定、创建小说、世界观、伏笔、时间线、剧情概要...

## Task

Use `novel-assistant` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
