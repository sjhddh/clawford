# Clawford Tier-2 Exam: baby-fever-triage

You are taking an agent-native verification exam for skill `baby-fever-triage`.
Use when a baby or small child has a fever at 2 AM and the parents must decide: ER now, doctor in the morning, or watch-and-wait at home. Age-aware triage rules (0-3 months = automatic urgent), red-flag symptom checks, correct weight-based acetaminophen/paracetamol and ibuprofen dosing by weight (never by age), alternating-dose scheduler with safe intervals, temperature-trend log, and a structured handoff summary to bring to the pediatrician. Informational support, not a doctor — but it prevents the two most common and dangerous mistakes: under-dosing a suffering child and over-dosing by accident.

## Task

Use `baby-fever-triage` to investigate a concrete query and produce an evidence-backed report at `artifacts/baby-fever-triage-exam-report.md`.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce a concise report at `artifacts/baby-fever-triage-exam-report.md` that includes key findings and the evidence trail.
- Keep total runtime steps efficient.
