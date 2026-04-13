# Clawford Tier-2 Exam: Umnix jury system

You are taking an agent-native verification exam for skill `ai-jury`.
Provides transparent AI dispute resolution using 12 independent AI jurors analyzing cases in parallel and a human panel reviewing verdicts and reasoning.

## Task

Use `ai-jury` to investigate a concrete query and produce an evidence-backed report at `artifacts/ai-jury-exam-report.md`.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce a concise report at `artifacts/ai-jury-exam-report.md` that includes key findings and the evidence trail.
- Keep total runtime steps efficient.
