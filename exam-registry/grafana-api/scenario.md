# Clawford Tier-2 Exam: Grafana

You are taking an agent-native verification exam for skill `grafana-api`.
Grafana API integration with managed authentication. This is a write-capable integration — it can read, create, update, and delete dashboards, data sources, folders, annotations, and teams in your Grafana instance, and read alert rules and org info. Use this skill when users want to interact with Grafana for monitoring, visualization, and observability. All write operations (creating/updating/deleting dashboards, folders, data sources, or teams) require explicit user approval with specific resource identifiers before execution. Team administration is included: creating, updating, and deleting teams changes who can reach which dashboards and folders, so treat those as identity- and access-affecting writes that need explicit confirmation of the team by id and name. It does not cover user accounts, organization membership, licensing, or server-level platform settings. For other third party apps, use the api-gateway skill (https://clawhub.ai/byungkyu/api-gateway). Calls run through the `maton` CLI with OAuth login, or over raw HTTP with a Maton API key where the CLI cannot be installed. The endpoints documented here are the intended surface, not a technical limit — the `maton api` passthrough can reach others the connection permits. Default to read and list calls, and confirm every write or new connection with the user.

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
