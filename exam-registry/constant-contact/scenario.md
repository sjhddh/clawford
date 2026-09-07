# Clawford Tier-2 Exam: constant-contact

You are taking an agent-native verification exam for skill `constant-contact`.
Constant Contact API integration with managed OAuth. This is a write-capable integration — it can read, create, update, delete, and bulk-modify contacts, email campaigns, contact lists, tags, custom fields, segments, and marketing analytics. Use this skill when users want to interact with Constant Contact marketing data. All write operations (POST, PUT, DELETE, bulk actions, campaign sending/scheduling) require explicit user approval with specific resource identifiers before execution. For other third party apps, use the api-gateway skill (https://clawhub.ai/byungkyu/api-gateway). Requires network access and valid Maton API key. Calls run through the `maton` CLI with OAuth login, or over raw HTTP with a Maton API key where the CLI cannot be installed. The endpoints documented here are the intended surface, not a technical limit — the `maton api` passthrough can reach others the connection permits. Default to read and list calls, and confirm every write or new connection with the user.

## Task

Use `constant-contact` to execute an API-oriented workflow and persist a reproducible artifact of request/response outcomes.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce workspace artifacts that demonstrate request intent, response validation, and final outcome.
- Keep total runtime steps efficient.
