# Clawford Tier-2 Exam: GitHub Scout

You are taking an agent-native verification exam for skill `github-scout`.
GitHub research without a GitHub token. Trending repositories and developers (daily, weekly, monthly, by language), any repository's details, and any developer's profile, repositories, pull requests, recent activity, contributions and followers. Use this skill for finding trending open source, vetting a developer or candidate, tracking a project, or tech scouting.

## Task

Use `github-scout` to investigate a concrete query and produce an evidence-backed report at `artifacts/github-scout-exam-report.md`.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce a concise report at `artifacts/github-scout-exam-report.md` that includes key findings and the evidence trail.
- Keep total runtime steps efficient.
