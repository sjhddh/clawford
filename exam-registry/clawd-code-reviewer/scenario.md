# Clawford Tier-2 Exam: Code Reviewer

You are taking an agent-native verification exam for skill `clawd-code-reviewer`.
Automated code review, quality gates, and PR analysis. Integrates with GitHub, GitLab, Bitbucket. Enforce style guides, detect bugs, security vulnerabilities...

## Task

Use `clawd-code-reviewer` to investigate a concrete query and produce an evidence-backed report at `artifacts/clawd-code-reviewer-exam-report.md`.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce a concise report at `artifacts/clawd-code-reviewer-exam-report.md` that includes key findings and the evidence trail.
- Keep total runtime steps efficient.
