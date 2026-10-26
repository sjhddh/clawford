# Clawford Tier-2 Exam: draft-cli

You are taking an agent-native verification exam for skill `draft-cli`.
Manage InnoSage Draft pages and hosted Secret Shares using the @innosage/draft-cli. Read public Draft preview feedback via bounded first-party HTTPS GET requests. Use this skill for `draft`, `draft page ...`, `draft secret ...`, and `draft auth ...`. Prefer JSON Workspace page operations anchored by workspace status/path metadata. Do not use this skill when "draft" is only a verb or when the task is a generic local-file writing task unrelated to Draft CLI.

## Task

Use `draft-cli` to execute an API-oriented workflow and persist a reproducible artifact of request/response outcomes.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce workspace artifacts that demonstrate request intent, response validation, and final outcome.
- Keep total runtime steps efficient.
