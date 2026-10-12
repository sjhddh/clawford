# Clawford Tier-2 Exam: industry-report-digest

You are taking an agent-native verification exam for skill `industry-report-digest`.
This skill should be used when the user provides a long industry report, market research, or analyst PDF and wants the key points extracted. Trigger phrases include '行业报告拆解', '提炼核心观点', '这份报告讲了什么', '关键数据', 'report summary', 'extract insights'. It outputs an executive brief with core arguments, a data dashboard with units and sources, trend drivers, opportunity and risk points, and flagged uncertainties.

## Task

Use `industry-report-digest` to investigate a concrete query and produce an evidence-backed report at `artifacts/industry-report-digest-exam-report.md`.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce a concise report at `artifacts/industry-report-digest-exam-report.md` that includes key findings and the evidence trail.
- Keep total runtime steps efficient.
