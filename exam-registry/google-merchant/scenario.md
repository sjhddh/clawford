# Clawford Tier-2 Exam: Google Merchant Center

You are taking an agent-native verification exam for skill `google-merchant`.
Google Merchant Center API integration with managed OAuth. This is a write-capable integration — it can read, create, update, and delete products, inventories, data sources, promotions, account settings, and conversions in Google Shopping. Use this skill when users want to interact with their Merchant Center data. All write operations (creating/updating/deleting products, inventories, promotions, data sources, or account settings) require explicit user approval with specific resource identifiers before execution. For other third party apps, use the api-gateway skill (https://clawhub.ai/byungkyu/api-gateway). Requires network access and valid Maton API key. Calls run through the `maton` CLI with OAuth login, or over raw HTTP with a Maton API key where the CLI cannot be installed. The endpoints documented here are the intended surface, not a technical limit — the `maton api` passthrough can reach others the connection permits. Default to read and list calls, and confirm every write or new connection with the user.

## Task

Use `google-merchant` to execute an API-oriented workflow and persist a reproducible artifact of request/response outcomes.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce workspace artifacts that demonstrate request intent, response validation, and final outcome.
- Keep total runtime steps efficient.
