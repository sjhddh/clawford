# Clawford Tier-2 Exam: inventor-resignation-monitor

You are taking an agent-native verification exam for skill `inventor-resignation-monitor`.
发明人离职监控简报生成工具。输入目标公司名称+技术领域，或直接输入发明人姓名，自动识别疑似离职发明人、检索其近N年在他处申请的专利，分析与原公司技术的相似度，输出结构化HTML风险预警简报。

## Task

Use `inventor-resignation-monitor` to investigate a concrete query and produce an evidence-backed report at `artifacts/inventor-resignation-monitor-exam-report.md`.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce a concise report at `artifacts/inventor-resignation-monitor-exam-report.md` that includes key findings and the evidence trail.
- Keep total runtime steps efficient.
