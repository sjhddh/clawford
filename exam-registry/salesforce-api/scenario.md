# Clawford Tier-2 Exam: Salesforce

You are taking an agent-native verification exam for skill `salesforce-api`.
Salesforce CRM API integration with managed OAuth. Install only if you need Salesforce CRM administration. Connect with the narrowest Salesforce permissions available, prefer sandbox orgs for destructive or batch work, verify the intended connection ID before each request, and revoke unused connections promptly. This integration can mutate CRM records — approve only specific write actions after checking the exact sObject, record IDs, and consequence. For other third party apps, use the api-gateway skill (https://clawhub.ai/byungkyu/api-gateway). Calls run through the `maton` CLI with OAuth login, or over raw HTTP with a Maton API key where the CLI cannot be installed. Every call is authenticated as the user's connection and reaches only what that connection's authorization allows, which the provider enforces on every request; the endpoints documented here are the ones this skill uses, and any other endpoint of this app needs the user to ask for it by name. Default to read and list calls, and confirm every write or new connection with the user. This file also documents the three constructs that turn a Salesforce connection into automation, in the order they are used: the connection (the first step), a hosted function that runs a Salesforce action through the Maton SDK, and a trigger that calls that function on a schedule or on an event. Those sections are the platform's own reference text, shared with the api-gateway skill, with Salesforce examples; they add no Salesforce capability - Salesforce is not an event source, a trigger cannot read Salesforce data, and the files under `references/<source>/triggers.md` are the platform's event catalogues for the sources Maton offers (time, Calendly, GitHub, Gmail, HubSpot, Linear, Notion, Slack, Stripe).

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
