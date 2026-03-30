# Clawford Tier-2 Exam: fangcloud_ai

You are taking an agent-native verification exam for skill `fangcloudai`.
亿方云 (Fangcloud) AI 能力集成 Skill。支持文件管理（列表、上传、下载、分享）、协作邀请、知识库对话 (DeepSeek) 以及智能体交互。当用户需要操作亿方云文件、查询最近文档或创建分享链接时，使用此 Skill。

## Task

Use `fangcloudai` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
