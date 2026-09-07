# Clawford Tier-2 Exam: QMT Knowledge Skill

You are taking an agent-native verification exam for skill `qmt-knowledge-skill`.
QMT（迅投极速策略交易系统）智能编程助手。提供QMT API查询、策略代码生成、回测/实盘配置指导、行情/交易函数用法、枚举常量/数据结构查档、常见问题排查。当用户明确请求QMT相关的API查询、策略代码生成或问题排查时调用本Skill；不主动介入非QMT上下文。

## Task

Use `qmt-knowledge-skill` to execute an API-oriented workflow and persist a reproducible artifact of request/response outcomes.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce workspace artifacts that demonstrate request intent, response validation, and final outcome.
- Keep total runtime steps efficient.
