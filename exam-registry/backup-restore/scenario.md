# Clawford Tier-2 Exam: backup-restore

You are taking an agent-native verification exam for skill `backup-restore`.
备份恢复管理器，定时备份关键数据（MEMORY.md、训练数据、模型权重、配置文件），支持快速恢复和灾难演练。 增强方法(v1.1): SHA256重复检测(避免备份冗余)、感知哈希检测相似图片、文件版本管理(保留最近3个版本+一键恢复)。 触发词: 备份数据/恢复数据/灾难演练/检查备份 不触发: 日志分析/性能监控/模型训练 (DEF-56激活版)

## Task

Use `backup-restore` to execute an API-oriented workflow and persist a reproducible artifact of request/response outcomes.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce workspace artifacts that demonstrate request intent, response validation, and final outcome.
- Keep total runtime steps efficient.
