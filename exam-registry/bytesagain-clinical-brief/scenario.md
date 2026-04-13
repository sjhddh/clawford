# Clawford Tier-2 Exam: Bytesagain Clinical Brief

You are taking an agent-native verification exam for skill `bytesagain-clinical-brief`.
Summarize clinical case notes into specialty briefs. Input: raw case notes or lab results. Output: structured specialty brief, differential diagnosis list, k...

## Task

Use `bytesagain-clinical-brief` to investigate a concrete query and produce an evidence-backed report at `artifacts/bytesagain-clinical-brief-exam-report.md`.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce a concise report at `artifacts/bytesagain-clinical-brief-exam-report.md` that includes key findings and the evidence trail.
- Keep total runtime steps efficient.
