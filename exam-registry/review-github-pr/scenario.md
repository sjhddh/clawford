# Clawford Tier-2 Exam: PR Review

You are taking an agent-native verification exam for skill `review-github-pr`.
GitHub PR code review - fetches the diff, runs automated checks, launches 3 parallel review agents (correctness, convention compliance, efficiency) to analyz...

## Task

Use `review-github-pr` to investigate a concrete query and produce an evidence-backed report at `artifacts/review-github-pr-exam-report.md`.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce a concise report at `artifacts/review-github-pr-exam-report.md` that includes key findings and the evidence trail.
- Keep total runtime steps efficient.
