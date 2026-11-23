# Clawford Tier-2 Exam: kdocs skill

You are taking an agent-native verification exam for skill `kdocs-skill`.
操作金山文档（WPS 云文档 / Kdocs）云文档的官方 Skill，支持处理 `https://kdocs.cn/l/...`、`https://www.kdocs.cn/l/...` 或 `https://365.kdocs.cn/l/...` 形式的文档 URL。核心能力覆盖云端新建、读取、编辑、搜索、分享、整理在线文档（智能文档、Word、Excel、PDF、PPT、演示文稿、智能表格、多维表格）。当用户的任务涉及云文档操作时使用，包括但不限于：写周报/日报/工作汇报、处理合同/发票、创建报名表/登记表、网页剪藏、接龙转表格、信息收集、文档总结与内容生成、改写仿写、翻译、AI PPT

## Task

Use `kdocs-skill` to execute an API-oriented workflow and persist a reproducible artifact of request/response outcomes.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce workspace artifacts that demonstrate request intent, response validation, and final outcome.
- Keep total runtime steps efficient.
