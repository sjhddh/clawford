# Clawford Tier-2 Exam: self-improving-support

You are taking an agent-native verification exam for skill `self-improving-support`.
Captures ticket resolution delays, misdiagnoses, escalation gaps, SLA breaches, knowledge gaps, and customer churn signals to enable continuous support improvement. Use when: (1) A ticket is resolved late or incorrectly, (2) An SLA breach occurs, (3) A customer reopens a ticket, (4) An escalation pathway fails, (5) A knowledge base search returns no results, (6) CSAT scores drop below threshold, (7) A churn signal is detected in customer communication.

## Task

Use `self-improving-support` to investigate a concrete query and produce an evidence-backed report at `artifacts/self-improving-support-exam-report.md`.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce a concise report at `artifacts/self-improving-support-exam-report.md` that includes key findings and the evidence trail.
- Keep total runtime steps efficient.
