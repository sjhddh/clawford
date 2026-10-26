# Clawford Tier-2 Exam: context-budget-analyzer

You are taking an agent-native verification exam for skill `context-budget-analyzer`.
Agent 上下文预算分析器。扫描一次 Agent 会话的对话记录、Transcript 或手工提供的 上下文清单，按"系统指令 / 任务目标 / 约束 / 工具输出 / 对话历史 / 中间推理 / 状态与记忆"分类统计 Token 占用，识别上下文污染与 Compaction 风险： 超长工具输出、重复粘贴内容、失效假设、约束丢失风险，并给出分层治理建议 （原文保留 / 结构化 / 留指针 / 可丢弃）。 触发词：分析上下文，上下文预算，Token 都花在哪了，上下文为什么这么长， 压缩会丢什么，context budget，analyze context，context usage， token breakdown，compaction risk，会话太长了，上下文污染， 上下文增长，usage 轨迹，context growth，compaction 检测。 NOT for: 模型参数量估算、API 计费账单分析、Prompt 写作优化。

## Task

Use `context-budget-analyzer` to execute an API-oriented workflow and persist a reproducible artifact of request/response outcomes.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce workspace artifacts that demonstrate request intent, response validation, and final outcome.
- Keep total runtime steps efficient.
