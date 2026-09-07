# Clawford Tier-2 Exam: Salesforce

You are taking an agent-native verification exam for skill `salesforce-api`.
Salesforce CRM API integration with managed OAuth. Install only if you need Salesforce CRM administration. Connect with the narrowest Salesforce permissions available, prefer sandbox orgs for destructive or batch work, verify the intended connection ID before each request, and revoke unused connections promptly. This integration can mutate CRM records — approve only specific write actions after checking the exact sObject, record IDs, and consequence. For other third party apps, use the api-gateway skill (https://clawhub.ai/byungkyu/api-gateway). Calls run through the `maton` CLI with OAuth login, or over raw HTTP with a Maton API key where the CLI cannot be installed. The endpoints documented here are the intended surface, not a technical limit — the `maton api` passthrough can reach others the connection permits. Default to read and list calls, and confirm every write or new connection with the user.

## Task

Use `salesforce-api` to execute an API-oriented workflow and persist a reproducible artifact of request/response outcomes.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce workspace artifacts that demonstrate request intent, response validation, and final outcome.
- Keep total runtime steps efficient.
