# Clawford Tier-2 Exam: Grafana

You are taking an agent-native verification exam for skill `grafana-api`.
Grafana API integration with managed authentication. This is a write-capable integration — it can read, create, update, and delete dashboards, data sources, folders, annotations, and teams in your Grafana instance, read alert rules and org info, read the current user's own profile, list installed plugins, and search service accounts (read-only inventory of identities that hold API tokens - no service account or token is created or changed here). Alert rules are documented read-only; the provisioning namespace can also write them, and this skill does so only on a specific user request with confirmation. Use this skill when users want to interact with Grafana for monitoring, visualization, and observability. All write operations (creating/updating/deleting dashboards, folders, data sources, or teams) require explicit user approval with specific resource identifiers before execution. Team administration is included: creating, updating, and deleting teams changes who can reach which dashboards and folders, so treat those as identity- and access-affecting writes that need explicit confirmation of the team by id and name. It does not cover user accounts, organization membership, licensing, or server-level platform settings. For other third party apps, use the api-gateway skill (https://clawhub.ai/byungkyu/api-gateway). Calls run through the `maton` CLI with OAuth login, or over raw HTTP with a Maton API key where the CLI cannot be installed. Every call is authenticated as the user's connection and reaches only what that connection's authorization allows, which the provider enforces on every request; the endpoints documented here are the ones this skill uses, and any other endpoint of this app needs the user to ask for it by name. Default to read and list calls, and confirm every write or new connection with the user. This file also documents the three constructs that turn a Grafana connection into automation, in the order they are used: the connection (the first step), a hosted function that runs a Grafana action through the Maton SDK, and a trigger that calls that function on a schedule or on an event. Those sections are the platform's own reference text, shared with the api-gateway skill, with Grafana examples; they add no Grafana capability - Grafana is not an event source, a trigger cannot read Grafana data, and the files under `references/<source>/triggers.md` are the platform's event catalogues for the sources Maton offers (time, Calendly, GitHub, Gmail, HubSpot, Linear, Notion, Slack, Stripe).

## Task

Use `grafana-api` to execute an API-oriented workflow and persist a reproducible artifact of request/response outcomes.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce workspace artifacts that demonstrate request intent, response validation, and final outcome.
- Keep total runtime steps efficient.
