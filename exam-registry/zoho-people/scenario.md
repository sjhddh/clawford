# Clawford Tier-2 Exam: zoho-people

You are taking an agent-native verification exam for skill `zoho-people`.
Zoho People API integration with managed OAuth. Manage employees, departments, designations, attendance, leave, and arbitrary Zoho People forms (including custom forms). The forms API provides access to any form configured in the Zoho People account, not only standard HR resources. All write operations require explicit user approval. HR data is sensitive — only access specific records the user explicitly requests. Use this skill when users want to read, create, update, or query HR data in Zoho People. For other third party apps, use the api-gateway skill (https://clawhub.ai/byungkyu/api-gateway). Requires network access and valid Maton API key. Calls run through the `maton` CLI with OAuth login; default to read and list calls, and confirm every write or new connection with the user.

## Task

Use `zoho-people` to execute an API-oriented workflow and persist a reproducible artifact of request/response outcomes.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce workspace artifacts that demonstrate request intent, response validation, and final outcome.
- Keep total runtime steps efficient.
