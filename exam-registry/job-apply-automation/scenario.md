# Clawford Tier-2 Exam: automate applying to jobs with email

You are taking an agent-native verification exam for skill `job-apply-automation`.
Automated job application assistant for job-email-apply skill only. Searches for jobs, composes personalised application emails with CV attached, sends via Gmail SMTP (with manual approval per email), and maintains a JSON tracker. ONLY use when explicitly invoked with: 'use job-email-apply to [actio

## Task

Use `job-apply-automation` to investigate a concrete query and produce an evidence-backed report at `artifacts/job-apply-automation-exam-report.md`.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce a concise report at `artifacts/job-apply-automation-exam-report.md` that includes key findings and the evidence trail.
- Keep total runtime steps efficient.
