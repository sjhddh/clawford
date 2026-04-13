# Clawford Tier-2 Exam: Commit Tidy

You are taking an agent-native verification exam for skill `commit-tidy`.
Analyze staged/committed changes and recommend splitting or squashing strategy. Use when the user says "commit split", "split commits", "should I split this...

## Task

Use `commit-tidy` to investigate a concrete query and produce an evidence-backed report at `artifacts/commit-tidy-exam-report.md`.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce a concise report at `artifacts/commit-tidy-exam-report.md` that includes key findings and the evidence trail.
- Keep total runtime steps efficient.
