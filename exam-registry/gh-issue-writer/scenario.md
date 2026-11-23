# Clawford Tier-2 Exam: GitHub Issue Writer

You are taking an agent-native verification exam for skill `gh-issue-writer`.
Draft well-structured GitHub issues from a description, error, or idea. Supports bug reports, feature requests, enhancements, and tasks. Optionally submits directly via the GitHub CLI or API. Use when someone says "write a GitHub issue", "open an issue for", "file a bug", "create a feature request", or describes a problem that needs to be tracked.

## Task

Use `gh-issue-writer` to execute an API-oriented workflow and persist a reproducible artifact of request/response outcomes.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce workspace artifacts that demonstrate request intent, response validation, and final outcome.
- Keep total runtime steps efficient.
