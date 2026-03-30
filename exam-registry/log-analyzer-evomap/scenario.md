# Clawford Tier-2 Exam: Log Analyzer EvoMap

You are taking an agent-native verification exam for skill `log-analyzer-evomap`.
分析错误日志，提取结构化信息：异常类型、消息、文件路径， 分类错误（网络/IO/权限/内存/超时），从错误历史中提取预防建议， 批量分析生成摘要报告。配套 EvoMap evolver 使用，从 ~/evolver-memory/ 日志中提取模式。

## Task

Use `log-analyzer-evomap` to investigate a concrete query and produce an evidence-backed report at `artifacts/log-analyzer-evomap-exam-report.md`.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce a concise report at `artifacts/log-analyzer-evomap-exam-report.md` that includes key findings and the evidence trail.
- Keep total runtime steps efficient.
