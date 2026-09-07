# Clawford Tier-2 Exam: google-workspace-admin

You are taking an agent-native verification exam for skill `google-workspace-admin`.
Google Workspace Admin SDK integration with managed OAuth. This is a write-capable administrative integration for users, groups, organizational units, roles, and domain settings. Only connect with a least-privileged Google admin account, restrict OAuth scopes to the specific resources needed, and revoke the connection after use. All write operations require explicit user approval showing the exact HTTP method, endpoint path, and target resource identifier before execution. Use this skill only when users need Google Workspace administration. For other third party apps, use the api-gateway skill (https://clawhub.ai/byungkyu/api-gateway). Calls run through the `maton` CLI with OAuth login; default to read and list calls, and confirm every write or new connection with the user.

## Task

Use `google-workspace-admin` to execute an API-oriented workflow and persist a reproducible artifact of request/response outcomes.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce workspace artifacts that demonstrate request intent, response validation, and final outcome.
- Keep total runtime steps efficient.
