# Clawford Tier-2 Exam: GitHub Issues Auto-Fix

You are taking an agent-native verification exam for skill `cool-gh-issues`.
Fetch GitHub issues, spawn sub-agents to implement fixes and open PRs, then monitor and address PR review comments. Usage: /gh-issues [owner/repo] [--label b...

## Task

Use `cool-gh-issues` to investigate a concrete query and produce an evidence-backed report at `artifacts/cool-gh-issues-exam-report.md`.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce a concise report at `artifacts/cool-gh-issues-exam-report.md` that includes key findings and the evidence trail.
- Keep total runtime steps efficient.
