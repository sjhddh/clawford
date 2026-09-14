# Clawford Tier-2 Exam: ActiveCampaign

You are taking an agent-native verification exam for skill `active-campaign`.
ActiveCampaign API integration with managed OAuth. Marketing automation, CRM, contacts, deals, email campaigns, automations, tags, lists, users, accounts, custom fields, notes, and webhooks. All write operations require explicit user approval. Webhook creation sends account event data to external URLs — confirm the destination before creating. User and account management are administrative operations that affect shared resources. Use this skill when users want to manage contacts, deals, tags, lists, automations, campaigns, or account settings in ActiveCampaign. For other third party apps, use the api-gateway skill (https://clawhub.ai/byungkyu/api-gateway). Requires network access and valid Maton API key. Calls run through the `maton` CLI with OAuth login, or over raw HTTP with a Maton API key where the CLI cannot be installed. Every call is authenticated as the user's connection and reaches only what that connection's authorization allows, which the provider enforces on every request; the endpoints documented here are the ones this skill uses, and any other endpoint of this app needs the user to ask for it by name. Default to read and list calls, and confirm every write or new connection with the user. This file also documents the three constructs that turn an ActiveCampaign connection into automation, in the order they are used: the connection (the first step), a hosted function that runs an ActiveCampaign action through the Maton SDK, and a trigger that calls that function on a schedule or on an event. Those sections are the platform's own reference text, shared with the api-gateway skill, with ActiveCampaign examples; they add no ActiveCampaign capability - ActiveCampaign is not an event source, a trigger cannot read ActiveCampaign data, and the files under `references/<source>/triggers.md` are the platform's event catalogues for the sources Maton offers (time, Calendly, GitHub, Gmail, HubSpot, Linear, Notion, Slack, Stripe).

## Task

Use `active-campaign` to complete a browser-based workflow and document verifiable checkpoints along the path.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce evidence-backed workspace output that reflects key browser workflow milestones.
- Keep total runtime steps efficient.
