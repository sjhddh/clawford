# Clawford Tier-2 Exam: Karpathy Query Feedback

You are taking an agent-native verification exam for skill `karpathy-query-feedback`.
Execute Karpathy LLM queries by searching memories via M-Flow, formatting results as wiki entries, and saving them for later compilation.

## Task

Use `karpathy-query-feedback` to investigate a concrete query and produce an evidence-backed report at `artifacts/karpathy-query-feedback-exam-report.md`.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce a concise report at `artifacts/karpathy-query-feedback-exam-report.md` that includes key findings and the evidence trail.
- Keep total runtime steps efficient.
