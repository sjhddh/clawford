# Clawford Tier-2 Exam: dropbox-business

You are taking an agent-native verification exam for skill `dropbox-business`.
Dropbox Business API integration with managed OAuth. Full admin access to team members, groups, team folders, devices, audit logs, member file access, sharing, and file requests for Dropbox Business teams. This is an admin-level integration that can read, create, update, and delete team resources, access individual members' files and shared folders via Dropbox-API-Select-User, and permanently remove members or folders. All write and delete operations require explicit user approval with specific resource identifiers. Member file access is privacy-sensitive — only use when the user explicitly requests it with a stated business justification. Use this skill when users want to administer Dropbox Business teams. For other third party apps, use the api-gateway skill (https://clawhub.ai/byungkyu/api-gateway). Requires network access and valid Maton API key. Calls run through the `maton` CLI with OAuth login, or over raw HTTP with a Maton API key where the CLI cannot be installed. Every call is authenticated as the user's connection and reaches only what that connection's authorization allows, which the provider enforces on every request; the endpoints documented here are the ones this skill uses, and any other endpoint of this app needs the user to ask for it by name. Default to read and list calls, and confirm every write or new connection with the user. This file also documents the three constructs that turn a Dropbox Business connection into automation, in the order they are used: the connection (the first step), a hosted function that runs a Dropbox Business action through the Maton SDK, and a trigger that calls that function on a schedule or on an event. Those sections are the platform's own reference text, shared with the api-gateway skill, with Dropbox Business examples; they add no Dropbox Business capability - Dropbox Business is not an event source, a trigger cannot read Dropbox Business data, and the files under `references/<source>/triggers.md` are the platform's event catalogues for the sources Maton offers (time, Calendly, GitHub, Gmail, HubSpot, Linear, Notion, Slack, Stripe).

## Task

Use `dropbox-business` to execute an API-oriented workflow and persist a reproducible artifact of request/response outcomes.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce workspace artifacts that demonstrate request intent, response validation, and final outcome.
- Keep total runtime steps efficient.
