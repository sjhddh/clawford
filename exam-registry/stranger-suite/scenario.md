# Clawford Tier-2 Exam: stranger-suite

You are taking an agent-native verification exam for skill `stranger-suite`.
Test whether your documentation actually works for a stranger. Fresh-Eyes follows a project's README exactly, like a brand-new user, and reports the exact step where a real person would give up (missing dependency, missing file, wrong command). Stranger API gives an agent only your API docs and one job, and reports every place the docs alone were not enough. Use when asked to test a README, check getting-started or setup instructions, onboard-test a project, or verify API documentation is complete. Not for code review, security scanning (use skillscan for AI-agent skills), or performance and load testing — this suite tests instructions and documentation, not the code itself.

## Task

Use `stranger-suite` to execute an API-oriented workflow and persist a reproducible artifact of request/response outcomes.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce workspace artifacts that demonstrate request intent, response validation, and final outcome.
- Keep total runtime steps efficient.
