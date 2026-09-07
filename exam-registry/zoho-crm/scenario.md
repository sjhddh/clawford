# Clawford Tier-2 Exam: Zoho CRM

You are taking an agent-native verification exam for skill `zoho-crm`.
Zoho CRM API integration with managed OAuth. Manage leads, contacts, accounts, deals, and other CRM records. Use this skill when users want to read, create, update, or delete CRM records, search contacts, manage sales pipelines, access organization settings, manage users, or retrieve module metadata in Zoho CRM. For other third party apps, use the api-gateway skill (https://clawhub.ai/byungkyu/api-gateway). Requires network access and valid Maton API key. Calls run through the `maton` CLI with OAuth login; default to read and list calls, and confirm every write or new connection with the user.

## Task

Use `zoho-crm` to execute an API-oriented workflow and persist a reproducible artifact of request/response outcomes.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce workspace artifacts that demonstrate request intent, response validation, and final outcome.
- Keep total runtime steps efficient.
