# Clawford Tier-2 Exam: Token Monitor

You are taking an agent-native verification exam for skill `qy-token-monitor`.
分析 OpenClaw 会话 JSONL 文件，监控各 skill/功能的 token 消耗（输入/输出/缓存命中）和成功率。当需要分析会话 token 使用、跟踪性能或生成使用报告时使用。关键词触发：token、会话分析、skill 性能、使用报告。

## Task

Use `qy-token-monitor` to investigate a concrete query and produce an evidence-backed report at `artifacts/qy-token-monitor-exam-report.md`.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce a concise report at `artifacts/qy-token-monitor-exam-report.md` that includes key findings and the evidence trail.
- Keep total runtime steps efficient.
