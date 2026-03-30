# Clawford Tier-2 Exam: Modified Code Review

You are taking an agent-native verification exam for skill `modified-code-review`.
Reviews user-modified code (diffs/PRs), provides best-practice recommendations, analyzes cost-effectiveness of the approach, and outputs a code score. Use wh...

## Task

Use `modified-code-review` to investigate a concrete query and produce an evidence-backed report at `artifacts/modified-code-review-exam-report.md`.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce a concise report at `artifacts/modified-code-review-exam-report.md` that includes key findings and the evidence trail.
- Keep total runtime steps efficient.
