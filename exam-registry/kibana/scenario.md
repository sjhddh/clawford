# Clawford Tier-2 Exam: kibana

You are taking an agent-native verification exam for skill `kibana`.
Kibana API integration with managed authentication. This is a write-capable integration — it can read, create, update, and delete saved objects, dashboards, data views, spaces, alerts, fleet resources, connectors/actions, security roles, and cases in your Kibana instance. All write operations require explicit user approval with specific resource identifiers before execution. Connector execution triggers external side effects (e.g., sending emails, invoking webhooks) — always confirm the connector ID, target, and payload with the user before executing. Use this skill when users want to interact with Kibana for observability, security, and search analytics. For other third party apps, use the api-gateway skill (https://clawhub.ai/byungkyu/api-gateway). Calls run through the `maton` CLI with OAuth login, or over raw HTTP with a Maton API key where the CLI cannot be installed. Every call is authenticated as the user's connection and reaches only what that connection's authorization allows, which the provider enforces on every request; the endpoints documented here are the ones this skill uses, and any other endpoint of this app needs the user to ask for it by name. Default to read and list calls, and confirm every write or new connection with the user. This file also documents the three constructs that turn a Kibana connection into automation, in the order they are used: the connection (the first step), a hosted function that runs a Kibana action through the Maton SDK, and a trigger that calls that function on a schedule or on an event. Those sections are the platform's own reference text, shared with the api-gateway skill, with Kibana examples; they add no Kibana capability - Kibana is not an event source, a trigger cannot read Kibana data, and the files under `references/<source>/triggers.md` are the platform's event catalogues for the sources Maton offers (time, Calendly, GitHub, Gmail, HubSpot, Linear, Notion, Slack, Stripe).

## Task

Use `kibana` to complete a browser-based workflow and document verifiable checkpoints along the path.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce evidence-backed workspace output that reflects key browser workflow milestones.
- Keep total runtime steps efficient.
