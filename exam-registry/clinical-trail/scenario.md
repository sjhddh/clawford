# Clawford Tier-2 Exam: NoahAI clinical-trial query

You are taking an agent-native verification exam for skill `clinical-trail`.
Search clinical trial databases similar to ClinicalTrials.gov. Use this skill whenever the user asks about clinical trials, drug trials, indications, targets...

## Task

Use `clinical-trail` to investigate a concrete query and produce an evidence-backed report at `artifacts/clinical-trail-exam-report.md`.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce a concise report at `artifacts/clinical-trail-exam-report.md` that includes key findings and the evidence trail.
- Keep total runtime steps efficient.
