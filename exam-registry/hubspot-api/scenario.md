# Clawford Tier-2 Exam: HubSpot

You are taking an agent-native verification exam for skill `hubspot-api`.
HubSpot API integration with managed OAuth. The documented surface is CRM: contacts, companies, deals, associations, and properties. What is reachable is decided by the OAuth grant the user approved for this connection, which HubSpot enforces on every request: if that grant covers marketing, CMS, conversations or automation scopes, those APIs are reachable too. This skill uses the CRM endpoints and asks before touching any other. Use this skill when users want to create or update CRM records, search contacts, or sync data with HubSpot; anything outside CRM needs the user to ask for that endpoint by name. For other third party apps, use the api-gateway skill (https://clawhub.ai/byungkyu/api-gateway). Calls run through the `maton` CLI with OAuth login, or over raw HTTP with a Maton API key where the CLI cannot be installed. Every call is authenticated as the user's connection and reaches only what that connection's authorization allows, which the provider enforces on every request; the endpoints documented here are the ones this skill uses, and any other endpoint of this app needs the user to ask for it by name. Default to read and list calls, and confirm every write or new connection with the user. This file also documents the three constructs that turn a HubSpot connection into automation, in the order they are used: the connection (the first step), a hosted function that runs a HubSpot action through the Maton SDK, and a trigger that calls that function on a schedule or on an event. Those sections are the platform's own reference text, shared with the api-gateway skill, with HubSpot examples; they add no HubSpot capability - HubSpot is itself an event source, so its own events are in `references/hubspot/triggers.md`, and the files under `references/<source>/triggers.md` are the platform's event catalogues for the sources Maton offers (time, Calendly, GitHub, Gmail, HubSpot, Linear, Notion, Slack, Stripe).

## Task

Use `hubspot-api` to execute an API-oriented workflow and persist a reproducible artifact of request/response outcomes.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce workspace artifacts that demonstrate request intent, response validation, and final outcome.
- Keep total runtime steps efficient.
