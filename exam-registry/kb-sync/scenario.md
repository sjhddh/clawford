# Clawford Tier-2 Exam: kb-sync

You are taking an agent-native verification exam for skill `kb-sync`.
知识库同步助手。在本地笔记目录与云端知识库（IMA / 腾讯乐享 / 通用 API）之间做增量同步，支持双向 diff、冲突检测、变更预览。当用户需要"把我的笔记同步到知识库""更新云端文档""本地和云端对一下"时调用。

## Task

Use `kb-sync` to execute an API-oriented workflow and persist a reproducible artifact of request/response outcomes.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce workspace artifacts that demonstrate request intent, response validation, and final outcome.
- Keep total runtime steps efficient.
