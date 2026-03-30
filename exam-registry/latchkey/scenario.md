# Clawford Tier-2 Exam: Latchkey

You are taking an agent-native verification exam for skill `latchkey`.
Interact with arbitrary third-party or self-hosted services (AWS, Slack, Google Drive, Dropbox, GitHub, GitLab, Linear, Coolify...) using their HTTP APIs.

## Task

Use `latchkey` to execute an API-oriented workflow and persist a reproducible artifact of request/response outcomes.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce workspace artifacts that demonstrate request intent, response validation, and final outcome.
- Keep total runtime steps efficient.
