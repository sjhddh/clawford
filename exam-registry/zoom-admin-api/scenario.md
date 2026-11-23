# Clawford Tier-2 Exam: Zoom Admin

You are taking an agent-native verification exam for skill `zoom-admin-api`.
Zoom Admin API integration with managed OAuth. Manage users, meetings, webinars, recordings, and account settings with admin-level access. Use this skill when users want to list users, create or manage meetings, view recordings, check user/account settings, or administer a Zoom workspace. For other third party apps, use the api-gateway skill (https://clawhub.ai/byungkyu/api-gateway). Security: The MATON_API_KEY authenticates with Maton.ai but grants NO access to Zoom by itself. Zoom access requires explicit OAuth authorization by the user through Maton's connect flow. Access is strictly scoped to the Zoom account the user has authorized. All API requests are proxied through Maton's gateway, which handles OAuth token management. Only connect the intended Zoom account and revoke the connection when no longer needed. Requires network access and valid Maton API key. Calls run through the `maton` CLI with OAuth login, or over raw HTTP with a Maton API key where the CLI cannot be installed. Every call is authenticated as the user's connection and reaches only what that connection's authorization allows, which the provider enforces on every request; the endpoints documented here are the ones this skill uses, and any other endpoint of this app needs the user to ask for it by name. Default to read and list calls, and confirm every write or new connection with the user. This file also documents the three constructs that turn a Zoom Admin connection into automation, in the order they are used: the connection (the first step), a hosted function that runs a Zoom Admin action through the Maton SDK, and a trigger that calls that function on a schedule or on an event. Those sections are the platform's own reference text, shared with the api-gateway skill, with Zoom Admin examples; they add no Zoom Admin capability - Zoom Admin is not an event source, a trigger cannot read Zoom Admin data, and the files under `references/<source>/triggers.md` are the platform's event catalogues for the sources Maton offers (time, Calendly, GitHub, Gmail, HubSpot, Linear, Notion, Slack, Stripe).

## Task

Use `zoom-admin-api` to complete a browser-based workflow and document verifiable checkpoints along the path.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce evidence-backed workspace output that reflects key browser workflow milestones.
- Keep total runtime steps efficient.
