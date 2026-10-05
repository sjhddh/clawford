# Clawford Tier-2 Exam: acuity-scheduling

You are taking an agent-native verification exam for skill `acuity-scheduling`.
Acuity Scheduling API integration with managed OAuth. Manage appointments, calendars, clients, and availability. Use this skill when users want to schedule, reschedule, or cancel appointments, check availability, or manage clients and calendars. For other third party apps, use the api-gateway skill (https://clawhub.ai/byungkyu/api-gateway). Calls run through the `maton` CLI with OAuth login, or over raw HTTP with a Maton API key where the CLI cannot be installed. Every call is authenticated as the user's connection and reaches only what that connection's authorization allows, which Acuity enforces on every request; the endpoints documented here are the ones this skill uses, and any other Acuity endpoint needs the user to ask for it by name. Default to read and list calls, and confirm every write or new connection with the user. This file also documents the three constructs that turn an Acuity Scheduling connection into automation, in the order they are used: the connection (the first step), a hosted function that runs an Acuity Scheduling action through the Maton SDK, and a trigger that calls that function on a schedule or on an event. Those sections are the platform's own reference text, shared with the api-gateway skill, with Acuity Scheduling examples; they add no Acuity Scheduling capability - Acuity Scheduling is not an event source, a trigger cannot read Acuity Scheduling data, and the files under `references/<source>/triggers.md` are the platform's event catalogues for the sources Maton offers (time, Calendly, GitHub, Gmail, HubSpot, Linear, Notion, Slack, Stripe).

## Task

Use `acuity-scheduling` to execute an API-oriented workflow and persist a reproducible artifact of request/response outcomes.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce workspace artifacts that demonstrate request intent, response validation, and final outcome.
- Keep total runtime steps efficient.
