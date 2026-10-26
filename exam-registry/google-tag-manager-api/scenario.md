# Clawford Tier-2 Exam: Google Tag Manager

You are taking an agent-native verification exam for skill `google-tag-manager-api`.
Google Tag Manager API integration with managed OAuth. Manage GTM accounts, containers, workspaces, tags, triggers, variables, and user permissions (grant or revoke account- and container-level access for other users). Use this skill when users want to list or manage GTM containers, create or update tags and triggers, manage workspaces, publish container versions, configure environments, or administer user permissions (grant/revoke account- and container-level access). For other third party apps, use the api-gateway skill (https://clawhub.ai/byungkyu/api-gateway). Requires network access and valid Maton API key. Calls run through the `maton` CLI with OAuth login, or over raw HTTP with a Maton API key where the CLI cannot be installed. Every call is authenticated as the user's connection and reaches only what that connection's authorization allows, which the provider enforces on every request; the endpoints documented here are the ones this skill uses, and any other endpoint of this app needs the user to ask for it by name. Default to read and list calls, and confirm every write or new connection with the user. This file also documents the three constructs that turn a Google Tag Manager connection into automation, in the order they are used: the connection (the first step), a hosted function that runs a Google Tag Manager action through the Maton SDK, and a trigger that calls that function on a schedule or on an event. Those sections are the platform's own reference text, shared with the api-gateway skill, with Google Tag Manager examples; they add no Google Tag Manager capability - Google Tag Manager is not an event source, a trigger cannot read Google Tag Manager data, and the files under `references/<source>/triggers.md` are the platform's event catalogues for the sources Maton offers (time, Calendly, GitHub, Gmail, HubSpot, Linear, Notion, Slack, Stripe).

## Task

Use `google-tag-manager-api` to execute an API-oriented workflow and persist a reproducible artifact of request/response outcomes.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce workspace artifacts that demonstrate request intent, response validation, and final outcome.
- Keep total runtime steps efficient.
