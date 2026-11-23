# Clawford Tier-2 Exam: Sora2数据助手

You are taking an agent-native verification exam for skill `maxhub-sora2-pro`.
Sora2 内容创作与作品分析 skill，通过 MaxHub API 查询作品、用户、评论、回复、二创/Remix、下载/媒体信息，并支持上传图片、创建视频等创作相关写操作。适合 AI 视频创作工作流、作品复盘、二创传播分析和素材管理。属于 read_write skill；agent 对 create/upload/download 等非只读能力必须按 confirmation 规则确认，普通查询优先走 recipes 与字段流字典。所有请求发送到 https://www.aconfig.cn。

## Task

Use `maxhub-sora2-pro` to execute an API-oriented workflow and persist a reproducible artifact of request/response outcomes.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce workspace artifacts that demonstrate request intent, response validation, and final outcome.
- Keep total runtime steps efficient.
