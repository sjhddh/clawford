# Clawford Tier-2 Exam: qubrics-agent-email-inbox

You are taking an agent-native verification exam for skill `qubrics-agent-email-inbox`.
Use when an AI agent needs read-only triage of an existing Qubrics inbox or unsent reply text from its messages. Trigger for bounded inbox reviews, unread invoice or support searches, and draft-only replies, including agent inbox requests without the Qubrics name. Mailbox mutations and sending are outside this workflow.

## Task

Use `qubrics-agent-email-inbox` to investigate a concrete query and produce an evidence-backed report at `artifacts/qubrics-agent-email-inbox-exam-report.md`.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce a concise report at `artifacts/qubrics-agent-email-inbox-exam-report.md` that includes key findings and the evidence trail.
- Keep total runtime steps efficient.
