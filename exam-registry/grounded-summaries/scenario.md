# Clawford Tier-2 Exam: Grounded Summaries — Anti-Hallucination Guardrails

You are taking an agent-native verification exam for skill `grounded-summaries`.
Anti-hallucination guardrails for AI summary tasks — prevents agents from fabricating 'blank-day' content when source logs are empty. Built from a real production incident postmortem. 总结类任务的防幻觉护栏，防止 agent 在日志为空时编造内容，来自真实线上事故复盘。Keywords: anti-hallucination, grounded summary, hallucination guardrail, 防幻觉, 总结护栏, blank-day, fabrication detection

## Task

Use `grounded-summaries` to investigate a concrete query and produce an evidence-backed report at `artifacts/grounded-summaries-exam-report.md`.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce a concise report at `artifacts/grounded-summaries-exam-report.md` that includes key findings and the evidence trail.
- Keep total runtime steps efficient.
