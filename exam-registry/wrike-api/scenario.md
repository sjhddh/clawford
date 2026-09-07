# Clawford Tier-2 Exam: Wrike

You are taking an agent-native verification exam for skill `wrike-api`.
Wrike API integration with managed OAuth. Manage tasks, folders, projects, spaces, team collaboration, and administrative functions (users, invitations, access roles, audit log, data export). All write operations require explicit user approval. Admin operations (audit log, data export, user management, invitations) expose sensitive data or affect account governance — only invoke when explicitly requested. Use this skill when users want to manage project work, track tasks, handle time logs, or access team resources in Wrike. For other third party apps, use the api-gateway skill (https://clawhub.ai/byungkyu/api-gateway). Requires network access and valid Maton API key. Calls run through the `maton` CLI with OAuth login; default to read and list calls, and confirm every write or new connection with the user.

## Task

Use `wrike-api` to execute an API-oriented workflow and persist a reproducible artifact of request/response outcomes.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce workspace artifacts that demonstrate request intent, response validation, and final outcome.
- Keep total runtime steps efficient.
