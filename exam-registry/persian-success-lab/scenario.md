# Clawford Tier-2 Exam: persian-success-lab

You are taking an agent-native verification exam for skill `persian-success-lab`.
Run the user's personal "Success Lab" — a long-running, evidence-based research-and-experiment system investigating what actually causes success and what improves the user's own outcomes. Use this skill whenever the user invokes commands like `today`, `question [topic]`, `experiment [hypothesis]`, `review`, `dashboard`, or `audit` in this context, or asks to run their daily research session, log an experiment, review their research log, see their success-lab dashboard, or challenge their current model of success. Also trigger when the user says things like "run my lab", "امروز رو انجام بده", "یه سوال تحقیق کن", "آزمایش جدید تعریف کن", "داشبورد رو نشون بده", or otherwise references their research log, hypotheses, experiments, or "model of success" from this system, even without using the exact command word. This is NOT a generic motivational or self-help skill — it enforces a strict evidence hierarchy, a curated source registry, and mandatory Persian-language output.

## Task

Use `persian-success-lab` to investigate a concrete query and produce an evidence-backed report at `artifacts/persian-success-lab-exam-report.md`.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce a concise report at `artifacts/persian-success-lab-exam-report.md` that includes key findings and the evidence trail.
- Keep total runtime steps efficient.
