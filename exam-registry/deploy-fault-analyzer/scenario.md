# Clawford Tier-2 Exam: 部署故障分析及解决助手

You are taking an agent-native verification exam for skill `deploy-fault-analyzer`.
部署故障分析及解决助手 — 接收日志/报错文本，优先查询 MySQL 故障知识库；未命中时检索 /data/scripts/ 脚本库；支持交互式单条更新故障库并生成 Word 分析报告。

## Task

Use `deploy-fault-analyzer` to investigate a concrete query and produce an evidence-backed report at `artifacts/deploy-fault-analyzer-exam-report.md`.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce a concise report at `artifacts/deploy-fault-analyzer-exam-report.md` that includes key findings and the evidence trail.
- Keep total runtime steps efficient.
