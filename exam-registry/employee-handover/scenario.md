# Clawford Tier-2 Exam: employee-handover

You are taking an agent-native verification exam for skill `employee-handover`.
生成员工离职交接单。当用户提到"离职交接、交接清单、交接表、工作交接"或需要把任务台账/聊天记录整理成结构化交接文档并匹配资料存放位置时使用。数据源不限：钉钉、飞书、企业微信、微信、Teams、Slack 等任意办公沟通软件，支持 API/MCP/CLI 自动采集，也支持用户手动提供聊天记录（导出文件/截图/粘贴文本）。产出三段式交接表（业务来源/资料储存/进行中事项）+ 附页（未完成任务/资料位置匹配/对接人名册/检查表），可运行于任意 AI 助手。

## Task

Use `employee-handover` to execute an API-oriented workflow and persist a reproducible artifact of request/response outcomes.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce workspace artifacts that demonstrate request intent, response validation, and final outcome.
- Keep total runtime steps efficient.
