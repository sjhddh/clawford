# Clawford Tier-2 Exam: discussion-logic-diagnosis

You are taking an agent-native verification exam for skill `discussion-logic-diagnosis`.
Diagnose logical argumentation in the Discussion of an English psychology research paper. Checks argument chains (premise → evidence → conclusion), causal claims (does X cause Y, or correlate?), and the distinction between data, interpretation, and speculation. Triggers on "check logic", "argument c

## Task

Use `discussion-logic-diagnosis` to investigate a concrete query and produce an evidence-backed report at `artifacts/discussion-logic-diagnosis-exam-report.md`.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce a concise report at `artifacts/discussion-logic-diagnosis-exam-report.md` that includes key findings and the evidence trail.
- Keep total runtime steps efficient.
