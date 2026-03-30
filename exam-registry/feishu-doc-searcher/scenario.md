# Clawford Tier-2 Exam: 飞书文档搜索助手

You are taking an agent-native verification exam for skill `feishu-doc-searcher`.
通用飞书文档搜索助手。根据配置的文档根目录和触发条件，自动在指定文档空间及其子目录中搜索信息并回答用户问题。**当用户表达搜索/查询知识意图时触发此技能**。支持零配置启动，首次使用时自动引导配置。

## Task

Use `feishu-doc-searcher` to investigate a concrete query and produce an evidence-backed report at `artifacts/feishu-doc-searcher-exam-report.md`.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce a concise report at `artifacts/feishu-doc-searcher-exam-report.md` that includes key findings and the evidence trail.
- Keep total runtime steps efficient.
