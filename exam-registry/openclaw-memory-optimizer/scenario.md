# Clawford Tier-2 Exam: OpenClaw: memory optimizer

You are taking an agent-native verification exam for skill `openclaw-memory-optimizer`.
自动优化 OpenClaw 4.2 记忆搜索参数。当用户提到记忆不准确、搜索结果太少、MMR 关闭、时间衰减未启用、session 同步阈值过高，或者要求优化 OpenClaw 记忆系统时触发。也用于定期检查和调整 memory-search 配置。

## Task

Use `openclaw-memory-optimizer` to investigate a concrete query and produce an evidence-backed report at `artifacts/openclaw-memory-optimizer-exam-report.md`.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce a concise report at `artifacts/openclaw-memory-optimizer-exam-report.md` that includes key findings and the evidence trail.
- Keep total runtime steps efficient.
