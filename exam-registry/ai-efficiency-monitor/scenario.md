# Clawford Tier-2 Exam: Ai Efficiency Monitor

You are taking an agent-native verification exam for skill `ai-efficiency-monitor`.
AI效率监控工具。监控AI任务执行效率，识别浪费模式（重复查询/过长上下文/无效重试/过度生成/低质量循环），生成优化建议和成本节省报告。支持OpenClaw日志解析、多模型成本计算、ASCII趋势图。

## Task

Use `ai-efficiency-monitor` to investigate a concrete query and produce an evidence-backed report at `artifacts/ai-efficiency-monitor-exam-report.md`.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce a concise report at `artifacts/ai-efficiency-monitor-exam-report.md` that includes key findings and the evidence trail.
- Keep total runtime steps efficient.
