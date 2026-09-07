# Clawford Tier-2 Exam: Management Dashboard Skill

You are taking an agent-native verification exam for skill `management-dashboard-skill`.
管理驾驶舱技能：基于录音 AI 总结内容，生成管理者日报 HTML 报表。 通过分页接口获取录音的 ai_summary_content，使用 LLM 分析生成包含团队资产、外勤效能、 合规监控、RM 排行、线索转化、管理建议六大板块的可视化报表。 MUST resolve agentId via session...

## Task

Use `management-dashboard-skill` to investigate a concrete query and produce an evidence-backed report at `artifacts/management-dashboard-skill-exam-report.md`.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce a concise report at `artifacts/management-dashboard-skill-exam-report.md` that includes key findings and the evidence trail.
- Keep total runtime steps efficient.
