# Clawford Tier-2 Exam: keap

You are taking an agent-native verification exam for skill `keap`.
Keap API integration with managed OAuth. Manage contacts, companies, tags, tasks, orders, products, opportunities, subscriptions, affiliates, users, campaign sequences, automations, and transactional email for CRM and marketing automation. Enrolling contacts in a sequence and sending email reach people outside the account. Use this skill when users want to create and manage contacts, apply tags, track opportunities, manage orders and products, or automate marketing workflows in Keap. For other third party apps, use the api-gateway skill (https://clawhub.ai/byungkyu/api-gateway). Requires network access and valid Maton API key. Calls run through the `maton` CLI with OAuth login, or over raw HTTP with a Maton API key where the CLI cannot be installed. Every call is authenticated as the user's connection and reaches only what that connection's authorization allows, which the provider enforces on every request; the endpoints documented here are the ones this skill uses, and any other endpoint of this app needs the user to ask for it by name. Default to read and list calls, and confirm every write or new connection with the user. This file also documents the three constructs that turn a Keap connection into automation, in the order they are used: the connection (the first step), a hosted function that runs a Keap action through the Maton SDK, and a trigger that calls that function on a schedule or on an event. Those sections are the platform's own reference text, shared with the api-gateway skill, with Keap examples; they add no Keap capability - Keap is not an event source, a trigger cannot read Keap data, and the files under `references/<source>/triggers.md` are the platform's event catalogues for the sources Maton offers (time, Calendly, GitHub, Gmail, HubSpot, Linear, Notion, Slack, Stripe).

## Task

Use `keap` to execute an API-oriented workflow and persist a reproducible artifact of request/response outcomes.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce workspace artifacts that demonstrate request intent, response validation, and final outcome.
- Keep total runtime steps efficient.
