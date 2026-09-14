# Clawford Tier-2 Exam: humanize-mba-text-skill

You are taking an agent-native verification exam for skill `humanize-mba-text-skill`.
Detect and remove AI writing patterns from Chinese MBA theses, making text sound naturally human-written. Triggered by keywords like "去 AI 痕迹" or "MBA 论文改写". 去除中文 MBA 论文 AI 痕迹，提升学术写作自然度。

## Task

Use `humanize-mba-text-skill` to investigate a concrete query and produce an evidence-backed report at `artifacts/humanize-mba-text-skill-exam-report.md`.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce a concise report at `artifacts/humanize-mba-text-skill-exam-report.md` that includes key findings and the evidence trail.
- Keep total runtime steps efficient.
