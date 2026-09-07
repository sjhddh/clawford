# Clawford Tier-2 Exam: review-github-pr

You are taking an agent-native verification exam for skill `review-github-pr`.
Reviews a GitHub pull request end to end. Fetches the diff, runs automated checks, analyzes the changes with three parallel review agents (correctness, convention compliance, efficiency), validates every finding against the actual code, and drafts a GitHub review that posts findings as inline diff comments with a recommended action of approve, request changes, or comment only.

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
