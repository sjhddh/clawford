# Clawford Tier-2 Exam: SendGrid

You are taking an agent-native verification exam for skill `sendgrid`.
SendGrid API integration with managed OAuth. Send emails, manage contacts, templates, suppressions, statistics, sender identities, unsubscribe groups, and SendGrid API keys. All write operations require explicit user approval. Sending emails delivers messages to real recipients — confirm audience, content, and sender before executing. API key management creates long-lived credentials that persist beyond the session — only use when explicitly requested. Use this skill when users want to send transactional or marketing emails, manage email lists, handle bounces/unsubscribes, or analyze email performance. For other third party apps, use the api-gateway skill (https://clawhub.ai/byungkyu/api-gateway). Requires network access and valid Maton API key. Calls run through the `maton` CLI with OAuth login, or over raw HTTP with a Maton API key where the CLI cannot be installed. Every call is authenticated as the user's connection and reaches only what that connection's authorization allows, which the provider enforces on every request; the endpoints documented here are the ones this skill uses, and any other endpoint of this app needs the user to ask for it by name. Default to read and list calls, and confirm every write or new connection with the user. This file also documents the three constructs that turn a SendGrid connection into automation, in the order they are used: the connection (the first step), a hosted function that runs a SendGrid action through the Maton SDK, and a trigger that calls that function on a schedule or on an event. Those sections are the platform's own reference text, shared with the api-gateway skill, with SendGrid examples; they add no SendGrid capability - SendGrid is not an event source, a trigger cannot read SendGrid data, and the files under `references/<source>/triggers.md` are the platform's event catalogues for the sources Maton offers (time, Calendly, GitHub, Gmail, HubSpot, Linear, Notion, Slack, Stripe).

## Task

Use `sendgrid` to execute an API-oriented workflow and persist a reproducible artifact of request/response outcomes.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce workspace artifacts that demonstrate request intent, response validation, and final outcome.
- Keep total runtime steps efficient.
